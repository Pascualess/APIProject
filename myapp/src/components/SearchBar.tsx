import * as React from 'react';

export interface ISearchBarProps {
}

export function SearchBar (props: ISearchBarProps) {
  return (
    <div className='SearchBar'>
      <input type="text" />
    </div>
  );
}
