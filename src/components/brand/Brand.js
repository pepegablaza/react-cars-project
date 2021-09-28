import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";

const Brand = observer(({ id, name, img }) => {
  const props = useContext(StoreContext);
  const { ui, brandsStore } = props;
  return (
    <article className="car">
      <div className="img-container">
        <img src={img && img} alt={name} />
      </div>
      <div className="car-footer">
        <h3>{name}</h3>
        <div className="buttons-container">
          <Link
            to={{
              pathname: `/brands/${id}`,
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
            onClick={() => brandsStore.deleteBrand(id)}
          >
            Delete a brand
          </button>
        </div>
      </div>
    </article>
  );
});

export default Brand;
