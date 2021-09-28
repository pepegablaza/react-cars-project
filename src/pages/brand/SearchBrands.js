import React from "react";
import SearchForm from "../../components/brand/SearchForm";
import FilteredBrandList from "../../components/brand/FilteredBrandList";

const SearchBrands = () => {
  return (
    <main>
      <SearchForm />
      <FilteredBrandList />
    </main>
  );
};

export default SearchBrands;
