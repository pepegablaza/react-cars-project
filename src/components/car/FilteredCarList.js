import React, { useContext } from "react";
import Car from "./Car";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Loading from "../Loading";
import { filteredCarStore } from "./stores/FilteredCarStore";

const FilteredCarList = observer(() => {
  const props = useContext(StoreContext);
  const { ui } = props;

  return (
    <section className="section">
      <h2 className="section-title">
        {filteredCarStore.filteredCars
          ? "All Cars"
          : "Sorry...But no Cars Matched."}
      </h2>
      {!ui.loading ? (
        <div className="cars-center">
          {filteredCarStore.filteredCars &&
            filteredCarStore.filteredCars.map((car) => {
              return <Car key={car.id} {...car} />;
            })}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
});

export default FilteredCarList;
