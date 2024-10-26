import { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode
}

type TFeedbackItemsContext = {
  updateUpvoteCount: (id: number, newUpvoteCount: number) => void;
  handleAddToList: (text: string) => void;
	handleFilter: (text: string) => void
  feedbackItems: TFeedbackItem[];
	filteredItems: TFeedbackItem[];
  allCompany: string[];
  errorMessage: string;
  isLoading: boolean;
}

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null);

const FeedbackItemsContextProvider = ({children}: FeedbackItemsContextProviderProps) => {
	const [filteredItems, setFilteredItems] = useState<TFeedbackItem[]>([]);
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);


	const handleAddToList = async (text: string) => {
		const companyName = text
			.split(" ")
			.find((word) => word.includes("#"))!
			.substring(1);

		const newItem: TFeedbackItem = {
			id: Date.now(),
			upvoteCount: 0,
			badgeLetter: companyName.substring(0, 1).toUpperCase(),
			company: companyName,
			text: text,
			daysAgo: 0,
		};

		setFeedbackItems([...feedbackItems, newItem]);

		try {
			const response = await fetch("http://localhost:3001/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newItem),
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Failed to save feedback item:", error);
		}
	};

	const allCompany = useMemo(() => {
    const uniqueCompany: string[] = [];
    feedbackItems.forEach((item) => {
      if (!uniqueCompany.includes(item.company)) {
        uniqueCompany.push(item.company);
      }
    });
    return uniqueCompany;
  }, [feedbackItems]);

	const updateUpvoteCount = async (id: number, newUpvoteCount: number) => {
		try {
			const response = await fetch("http://localhost:3001/", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: id,
					upvoteCount: newUpvoteCount,
				}),
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Failed to update item:", error);
		}
	};

	const handleFilter = useMemo(() => (text: string) => {
		setFilteredItems(
			feedbackItems.filter((item) => item.company.includes(text))
		);
	}, [feedbackItems]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch("base.json", {
					cache: "no-store",
				});

				const data = await response.json();

				setFeedbackItems(data);
			} catch (error) {
				setErrorMessage("Something went wrong!");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<FeedbackItemsContext.Provider
			value={{
				updateUpvoteCount,
				handleAddToList,
				feedbackItems,
				filteredItems,
				errorMessage,
				handleFilter,
				allCompany,
				isLoading,
			}}
		>
      {children}
		</FeedbackItemsContext.Provider>
	);
};

export default FeedbackItemsContextProvider;