import React from "react";
import SearchForm from "../../components/car/SearchForm";
import FilteredCarList from "../../components/car/FilteredCarList";

const Search = () => {
  return (
    <main>
      <SearchForm />
      <FilteredCarList />
    </main>
  );
};

export default Search;
