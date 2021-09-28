import { action, makeObservable } from "mobx";
import { brandsStore } from "../../../store/BrandsStore";
import { ui } from "../../../store/uiStore";

class EditBrandStore {
  constructor() {
    makeObservable(this, {
      handleSubmitEdit: action,
      onChange: action,
    });
  }
  handleSubmitEdit = (e) => {
    e.preventDefault();
    if (brandsStore.brand.name === "") {
      ui.error();
    } else {
      brandsStore.updateBrand(brandsStore.brand, brandsStore.brand.id);
      ui.success();
      ui.setEdit();
      ui.setImageWarning(false);
    }
  };
  onChange(e) {
    brandsStore.setBrandsImg(e.target.value);
    ui.isValidUrl(brandsStore.brand.img);
  }
}

export const editBrandStore = new EditBrandStore();
