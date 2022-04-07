import React, { useRef, useState } from 'react'

function SearchForm(props) {
  const {onSubmit} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if(!onSubmit) return;

    if(typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      }
      onSubmit(formValues);
    }, 300);
  }
  return (
    <form>
      <input type="text" onChange={handleSearchTermChange}/>
    </form>
  )
}

export default SearchForm