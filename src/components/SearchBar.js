const SearchBar = ({ searchText, onSearchChange }) => (
  <label className="search-box">
    <span aria-hidden="true">⌕</span>
    <input
      type="search"
      value={searchText}
       onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search events by name..."
       aria-label="Search events by name"
    />
  </label>
);

export default SearchBar;
