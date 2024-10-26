import { useCommentsStore } from "../../../store/feedbackItemsStore";

type HashtagItemsProps = {
  company: string
}

const HashtagItems = ({ company}: HashtagItemsProps) => {
  const filterComments = useCommentsStore((state) => state.filterComments);

  const firstLetterUpperCase = company[0].toUpperCase() + company.slice(1).toLowerCase();
  
  return (
    <li>
      <button onClick={() => filterComments(company)}>#{firstLetterUpperCase}</button>
    </li>
  )
}

export default HashtagItems