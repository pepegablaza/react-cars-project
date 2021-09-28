import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";

const Car = observer(({ id, brand, model, image, logo }) => {
  const props = useContext(StoreContext);
  const { store, ui } = props;
  return (
    <article className="car">
      <div className="images">
        <img src={image} alt={`${brand}${model}`} />
      </div>
      <div className="car-footer">
        <h3>{brand && brand}</h3>
        <h4>{model}</h4>
        <img src={logo} alt={brand} />
        <div className="buttons-container">
          <Link
            to={{
              pathname: `/cars/${id}`,
              state: {
                id,
              },
            }}
          >
            <button
              className="btn btn-primary btn-details"
              onClick={ui.loadingEffect}
            >
              Details
            </button>
          </Link>
          <button
            className="btn btn-primary btn-details"
            onClick={() => store.deleteCar(id)}
          >
            Delete a car
          </button>
        </div>
      </div>
    </article>
  );
});

export default Car;
