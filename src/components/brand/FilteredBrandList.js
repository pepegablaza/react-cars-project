import React from "react";
import Brand from "./Brand";
import { observer } from "mobx-react";
import { ui } from "../../store/uiStore";
import Loading from "../Loading";
import { filteredBrandsStore } from "./stores/FilteredBrandsStore";

const FilteredBrandList = observer(() => {
  return (
    <section className="section">
      <h2 className="section-title">
        {filteredBrandsStore.filteredBrands
          ? "All Brands"
          : "Sorry...But no Brands Matched."}
      </h2>
      {!ui.loading ? (
        <div className="cars-center">
          {filteredBrandsStore.filteredBrands &&
            filteredBrandsStore.filteredBrands.map((brand) => {
              return <Brand key={brand.id} {...brand} />;
            })}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
});

export default FilteredBrandList;
