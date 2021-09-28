import { action, makeObservable } from "mobx";
import { store } from "../../../store/CarsStore";
import { brandsStore } from "../../../store/BrandsStore";
import { ui } from "../../../store/uiStore";
import routingStore from "../../../store/RouterStore";

class CreateCarStore {
  constructor() {
    makeObservable(this, {
      handleSubmitCreate: action,
      selectOnChange: action,
      inputOnChange: action,
      getBrandById: action,
    });
  }

  handleSubmitCreate = (e, ref) => {
    e.preventDefault();
    if (
      store.model === "" ||
      store.brandId === "" ||
      brandsStore.brand === undefined
    ) {
      ui.error();
    } else {
      store.addCar({
        id: new Date().getTime().toString(),
        brand: brandsStore.brand.name,
        model: store.model,
        image: store.image,
        logo: brandsStore.brand.img,
        specs: store.specs,
      });
      ui.success();
      ref.current.value = "default";
      store.setBrandId("");
      store.setModel("");
      store.setImage("");
      store.setSpecs("");
      ui.setImageWarning(false);
      this.getBrandById(store.brandId);
      setTimeout(() => {
        routingStore.push("/searchCars");
      }, 1000);
    }
  };

  getBrandById(id) {
    if (id === "") {
      brandsStore.setBrand({});
    }
    const newBrand = brandsStore.brands.find((brand) => brand.id === id);
    brandsStore.setBrand(newBrand);
  }

  inputOnChange(e) {
    store.setImage(e.target.value);
    ui.isValidUrl(store.image);
  }
  selectOnChange(e) {
    store.setBrandId(e.target.value);
    this.getBrandById(store.brandId);
  }
}

export const createCarStore = new CreateCarStore();
