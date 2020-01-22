import React from 'react';

import { Input } from './style';

export default function SearchInput() {
  return (
    <Input
      type="text"
      className="search-box"
      placeholder="Digite um termo de busca"
    />
  );
}
