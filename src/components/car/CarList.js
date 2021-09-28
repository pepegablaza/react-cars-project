import React, { useContext } from "react";
import Car from "./Car";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Loading from "../Loading";
import Pagination from "./Pagination";
import { paginationStore } from "./stores/PaginationStore";

const CarsList = observer(() => {
  const props = useContext(StoreContext);
  const { ui } = props;

  return (
    <>
      {!ui.loading ? (
        <section className="section">
          <div className="cars-center">
            {paginationStore.currentCars.map((car) => {
              return <Car key={car.id} {...car} />;
            })}
          </div>
          <Pagination />
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
});

export default CarsList;
