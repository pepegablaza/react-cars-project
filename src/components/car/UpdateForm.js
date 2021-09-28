import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Messages from "./Messages";
import { editCarStore } from "./stores/EditCarStore";

const UpdateForm = observer(() => {
  const props = useContext(StoreContext);
  const { ui, store, brandsStore } = props;

  return (
    <>
      <Messages />
      <p className={ui.successMessage ? "success" : null}>
        {ui.successMessage && "Car Successfully updated"}
      </p>
      {ui.edit && (
        <form
          onSubmit={(e) => editCarStore.handleSubmitEdit(e)}
          className="search-form"
        >
          <div className="form-control">
            <label htmlFor="brand">Choose New brand</label>
            <select
              className="btn"
              id="brand"
              onChange={(e) => editCarStore.selectOnChange(e)}
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
            <label htmlFor="brand">Enter new model</label>
            <input
              type="text"
              value={store.car.model}
              id="model"
              onChange={(e) => store.setCarModel(e.target.value)}
            />
            <label htmlFor="brand">Enter new image url</label>
            <input
              type="text"
              value={store.car.image}
              id="image"
              onChange={(e) => editCarStore.inputOnChange(e)}
            />
            <label htmlFor="specs">Enter new specifications</label>
            <textarea
              type="text"
              id="specs"
              value={store.car.specs}
              onChange={(e) => store.setCarSpecs(e.target.value)}
            />
            <button type="submit" className="btn">
              Save Changes
            </button>
          </div>
        </form>
      )}
    </>
  );
});

export default UpdateForm;
