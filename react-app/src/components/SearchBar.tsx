type SearchBarProps = {
  categories: string[];
  searchText: string;
  setFilterCategory: (text: string) => void;
  setSearchText: (text: string) => void;
};

export default function SearchBar({
  categories,
  searchText,
  setFilterCategory,
  setSearchText,
}: SearchBarProps) {
  const id = 'input-search';
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <label htmlFor={id}>검색</label>
      <input
        id={id}
        placeholder="식당이름"
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <ul className="button-container">
        {['전체', ...categories].map((category) => (
          <li key={category}>
            <button type="button" onClick={() => setFilterCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
