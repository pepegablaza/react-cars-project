import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../index";
import Messages from "./Messages";
import { createBrandStore } from "../brand/stores/CreateBrandStore";

const CreateBrandForm = observer(() => {
  const props = useContext(StoreContext);
  const { ui, brandsStore } = props;

  return (
    <section className="section search">
      <form
        onSubmit={(e) => createBrandStore.handleSubmitCreate(e)}
        className="search-form"
      >
        <div className="form-control">
          <Messages />
          <p className={ui.successMessage ? "success" : null}>
            {ui.successMessage && "Brand Successfully created"}
          </p>
          <label htmlFor="name">Enter a brand</label>
          <input
            type="text"
            value={brandsStore.brandName}
            id="name"
            onChange={(e) => brandsStore.setBrandName(e.target.value)}
          />
          <label htmlFor="img">Enter logo url</label>
          <input
            type="text"
            value={brandsStore.brandImg}
            id="img"
            onChange={(e) => createBrandStore.onChange(e)}
          />
          <div className="form-buttons">
            <button type="submit" className="btn">
              Create
            </button>
            <button onClick={ui.goBack} className="btn">
              Back
            </button>
          </div>
        </div>
      </form>
    </section>
  );
});

export default CreateBrandForm;
