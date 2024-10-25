import { useContext } from "react";
import { FeedbackItemsContext } from "../context/FeedbackItemsContextProvider";

export const useFeedbackItemsContext = () => {
	const context = useContext(FeedbackItemsContext);
	if (!context) {
		throw new Error("FeedbackItemsContext not found");
	}
	return context;
}