import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import { Link } from "react-router-dom";
import { searchBrandStore } from "./stores/SearchBrandStore";

const SearchForm = observer(() => {
  const props = useContext(StoreContext);
  const { brandsStore } = props;

  return (
    <>
      <section className="section search">
        <form
          className="search-form"
          onSubmitCapture={(e) => e.preventDefault()}
        >
          <div className="form-control">
            <label htmlFor="brand">Search brand / Create a brand</label>
            <input
              type="text"
              placeholder="Search"
              value={brandsStore.searchTerm}
              onChange={(e) => searchBrandStore.inputOnChange(e)}
            />
            <div className="form-buttons">
              <select
                className="btn"
                id="select"
                onChange={(e) => searchBrandStore.selectOnChange(e)}
              >
                <option value="sort">Sort By:</option>
                <option value="reset">Reset</option>
                <option value="recent">Most Recent</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
              <Link className="btn create-btn" to="/createBrand">
                Create a brand
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
});

export default SearchForm;
