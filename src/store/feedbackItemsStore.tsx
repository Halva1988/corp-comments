import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

type CommentsState = {
	feedbackItems: TFeedbackItem[];
	filteredItems: TFeedbackItem[];
	uniqueCompany: string[];
	errorMessage: string;
	isLoading: boolean;
	allCompany: () => void;
	addComment: (text: string) => void;
	updateUpvoteCount: (id: number, newUpvoteCount: number) => void;
	filterComments: (text: string) => void;
	fetchData: () => void;
};

export const useCommentsStore = create<CommentsState>((set, get) => ({
	filteredItems: [],
	feedbackItems: [],
	uniqueCompany: [],
	isLoading: false,
	errorMessage: "",
	fetchData: async () => {
		set(() => ({ isLoading: true }));

		try {
			const response = await fetch("base.json", {
				cache: "no-store",
			});

			const data = await response.json();

			set(() => ({ feedbackItems: data }));
			
		} catch (error) {
			set(() => ({
				errorMessage: "Something went wrong!",
			}));
		} finally {
			set(() => ({ isLoading: false }));
		}
	},
	allCompany: () => {
		get().feedbackItems.forEach((item) => {
			if (!get().uniqueCompany.includes(item.company)) {
				set({ uniqueCompany: [...get().uniqueCompany, item.company] });
			}
		});
	},
	addComment: async (text: string) => {
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

		set((state) => ({
			feedbackItems: [...state.feedbackItems, newItem],
		}));
		
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
		get().allCompany();
	},
	updateUpvoteCount: async (id: number, newUpvoteCount: number) => {
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
	},
	filterComments: (text: string) =>
		set((state) => ({
			filteredItems: state.feedbackItems.filter((item) =>
				item.company.includes(text)
			),
		})),
}));
