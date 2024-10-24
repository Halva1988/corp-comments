
type HashtagItemsProps = {
  company: string,
  handleFilter: (text: string) => void
}

const HashtagItems = ({handleFilter, company}: HashtagItemsProps) => {
  return (
    <li>
      <button onClick={() => handleFilter(company)}>#{company}</button>
    </li>
  )
}

export default HashtagItems