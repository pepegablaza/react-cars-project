import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../index";
import Loading from "../../components/Loading";
import { detailsStore } from "../brand/stores/DetailsStore";

const CarDetails = observer(() => {
  const props = useContext(StoreContext);
  const { ui, store, carService } = props;

  useEffect(() => {
    store.getCar(detailsStore.id);
  }, [store, carService]);

  return (
    <>
      {!ui.loading ? (
        <div className="details-container">
          <div className="details">
            <img
              src={store.car.image}
              alt={`${store.car.brand}${store.car.model}`}
            />
          </div>

          <div className="details-spec">
            <div>
              <img src={store.car.logo} alt="logo"></img>
              <span className="category">Brand: </span>
              {store.car.brand && store.car.brand}
            </div>

            <div>
              <span className="category">Model: </span>
              {store.car.model && store.car.model}
            </div>

            <div>
              <span className="category">Specs:</span>
              {store.car.specs ? store.car.specs : "No specs for this car"}
            </div>

            <div className="details-buttons">
              <button className="btn btn-primary">
                <Link to="/">Back to homepage</Link>
              </button>
              <button className="btn btn-primary" onClick={() => ui.setEdit()}>
                {ui.edit ? "Exit editing" : " Edit this car"}
              </button>
              <button onClick={ui.goBack} className="btn btn-primary">
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
});

export default CarDetails;
