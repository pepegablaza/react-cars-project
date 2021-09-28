import React, { useContext, useRef } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Messages from "./Messages";
import { createCarStore } from "./stores/CreateCarStore";

const CarForm = observer(() => {
  const props = useContext(StoreContext);
  const { ui, store, brandsStore } = props;
  const ref = useRef(null);

  return (
    <section className="section search">
      <form
        onSubmit={(e) => createCarStore.handleSubmitCreate(e, ref)}
        className="search-form"
      >
        <div className="form-control">
          <Messages />
          <p className={ui.successMessage ? "success" : null}>
            {ui.successMessage && "Car Successfully created"}
          </p>
          <label htmlFor="brand">Choose a brand</label>
          <select
            ref={ref}
            className="btn"
            id="brand"
            onChange={(e) => createCarStore.selectOnChange(e)}
          >
            <option value="default">Select</option>
            {brandsStore.brands.map((brand) => {
              return (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="brand">Enter a model</label>
          <input
            type="text"
            value={store.model}
            id="model"
            onChange={(e) => store.setModel(e.target.value)}
          />
          <label htmlFor="brand">Enter an image url</label>
          <input
            type="text"
            value={store.image}
            id="image"
            onChange={(e) => createCarStore.inputOnChange(e)}
          />
          <label htmlFor="specs">Enter specifications</label>
          <textarea
            type="text"
            id="specs"
            value={store.specs}
            onChange={(e) => store.setSpecs(e.target.value)}
          />
          <div className="form-buttons">
            <button type="submit" className="btn">
              Create
            </button>
            <button type="button" onClick={() => ui.goBack()} className="btn">
              Back
            </button>
          </div>
        </div>
      </form>
    </section>
  );
});

export default CarForm;
