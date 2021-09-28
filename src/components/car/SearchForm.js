import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import { Link } from "react-router-dom";
import { searchCarStore } from "./stores/SearchCarStore";

const SearchForm = observer(() => {
  const props = useContext(StoreContext);
  const { store } = props;
  return (
    <>
      <section className="section search">
        <form
          className="search-form"
          onSubmitCapture={(e) => e.preventDefault()}
        >
          <div className="form-control">
            <label htmlFor="brand">Search car / Create a car</label>
            <input
              type="text"
              placeholder="Search"
              value={store.searchTerm}
              onChange={(e) => searchCarStore.inputOnChange(e)}
            />
            <div className="form-buttons">
              <select
                className="btn"
                id="select"
                onChange={(e) => searchCarStore.selectOnChange(e)}
              >
                <option value="sort">Sort By:</option>
                <option value="reset">Reset</option>
                <option value="recent">Most Recent</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>

              <Link className="btn create-btn" to="/createCar">
                Create a car
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
});

export default SearchForm;
