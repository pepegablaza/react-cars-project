import { action, makeObservable } from "mobx";
import { store } from "../../../store/CarsStore";
import { brandsStore } from "../../../store/BrandsStore";
import { createCarStore } from "./CreateCarStore";
import { ui } from "../../../store/uiStore";

class EditCarStore {
  constructor() {
    makeObservable(this, {
      handleSubmitEdit: action,
      selectOnChange: action,
      inputOnChange: action,
    });
  }

  handleSubmitEdit = (e) => {
    e.preventDefault();
    if (store.car.model === "") {
      ui.error();
    } else {
      store.updateCar(store.car, store.car.id);
      ui.success();
      ui.setEdit();
      ui.setImageWarning(false);
    }
  };
  selectOnChange(e) {
    store.setBrandId(e.target.value);
    createCarStore.getBrandById(store.brandId);
    store.setCarBrand(brandsStore.brand.name);
    store.setCarBrandLogo(brandsStore.brand.img);
  }
  inputOnChange(e) {
    store.setCarImage(e.target.value);
    ui.isValidUrl(store.car.image);
  }
}

export const editCarStore = new EditCarStore();
