import { useFeedbackItemsContext } from "../../../hooks/useFeedbackItemsContext";

type HashtagItemsProps = {
  company: string
}

const HashtagItems = ({ company}: HashtagItemsProps) => {
  const { handleFilter } = useFeedbackItemsContext();

  const firstLetterUpperCase = company[0].toUpperCase() + company.slice(1).toLowerCase();
  
  return (
    <li>
      <button onClick={() => handleFilter(company)}>#{firstLetterUpperCase}</button>
    </li>
  )
}

export default HashtagItems