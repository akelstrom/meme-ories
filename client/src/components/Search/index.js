import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";

const Search = () => {
  <SearchBar
  dataSource={state.dataSource}
  onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
  onRequestSearch={() => console.log('onRequestSearch')}
  style={{
    margin: '0 auto',
    maxWidth: 800
  }}
/>
}

export default Search
