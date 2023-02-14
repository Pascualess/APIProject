
import { useState } from 'react';

export interface ISearchBarProps {
}

export function SearchBar (props: ISearchBarProps) {
  const [value, setValue] = useState()
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className='SearchBar'>
      <input type="text" value={value} onChange={onChange}/>
      <button></button>
    </div>
  );
}
