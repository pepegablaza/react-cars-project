import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Messages from "./Messages";
import { editBrandStore } from "./stores/EditBrandStore";

const UpdateForm = observer(() => {
  const props = useContext(StoreContext);
  const { ui, brandsStore } = props;
  return (
    <>
      <Messages />
      <p className={ui.successMessage ? "success" : null}>
        {ui.successMessage && "Brand Successfully updated"}
      </p>
      {ui.edit && (
        <form
          onSubmit={editBrandStore.handleSubmitEdit}
          className="search-form"
        >
          <div className="form-control">
            <label htmlFor="brand">Enter new brand</label>
            <input
              type="text"
              value={brandsStore.brand.name}
              id="brand"
              onChange={(e) => brandsStore.setBrandsName(e.target.value)}
            />
            <label htmlFor="brand">Enter new logo url</label>
            <input
              type="text"
              value={brandsStore.brand.img}
              id="image"
              onChange={(e) => editBrandStore.onChange(e)}
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
