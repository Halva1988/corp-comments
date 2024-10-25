
type HashtagItemsProps = {
  company: string,
  handleFilter: (text: string) => void
}

const HashtagItems = ({handleFilter, company}: HashtagItemsProps) => {
  const firstLetterUpperCase = company[0].toUpperCase() + company.slice(1).toLowerCase();
  
  return (
    <li>
      <button onClick={() => handleFilter(company)}>#{firstLetterUpperCase}</button>
    </li>
  )
}

export default HashtagItems