import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../index";
import UpdateBrandForm from "../../components/brand/UpdateBrandForm";
import Loading from "../Loading";
import { detailsStore } from "./stores/DetailsStore";

const BrandDetails = observer(() => {
  const props = useContext(StoreContext);
  const { ui, brandsStore, store } = props;

  useEffect(() => {
    brandsStore.getBrand(detailsStore.id);
  }, [store, brandsStore]);
  return (
    <>
      <UpdateBrandForm />
      {!ui.loading ? (
        <div className="details-container">
          <div className="details">
            <img
              className="brand-logo"
              src={brandsStore.brand.img ? brandsStore.brand.img : null}
              alt={brandsStore.brand.name}
            />
          </div>
          <div className="details-spec">
            <div>
              <span className="category brand">Brand Name:</span>
              {brandsStore.brand && brandsStore.brand.name}
            </div>
            <div className="details-buttons">
              <button className="btn btn-primary">
                <Link to="/">Back to homepage</Link>
              </button>
              <button className="btn btn-primary" onClick={() => ui.setEdit()}>
                {ui.edit ? "Exit editing" : " Edit this brand"}
              </button>
              <button className="btn btn-primary" onClick={ui.goBack}>
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

export default BrandDetails;
