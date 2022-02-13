import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';

export default function SearchDropdown() {
  const [searchString, setSearchString] = useState('');
  const [status, setStatus] = useState('idle');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchListsAndContacts = useCallback(
    debounce(async (text) => {
      setStatus('pending');
      try {
        // await handleSearch(text);
        setStatus('done');
      } catch (error) {
        console.error(error);
        setStatus(error);
      }
    }, 500),
    []
  );

  const handleChange = (text) => {
    setSearchString(text);
    searchListsAndContacts(text);
  };
  return (
    <Select
      onChange={handleChange}
      name="filters"
      options={[{ value: 'ci', label: 'simon' }].map((tag) => ({
        value: tag.value,
        label: tag.label,
      }))}
      className="Companies__Dropdown"
    />
  );
}
