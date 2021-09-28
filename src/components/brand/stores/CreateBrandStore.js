import { action, makeObservable } from "mobx";
import { brandsStore } from "../../../store/BrandsStore";
import routingStore from "../../../store/RouterStore";
import { ui } from "../../../store/uiStore";

class CreateBrandStore {
  constructor() {
    makeObservable(this, {
      handleSubmitCreate: action,
      checkBrandName: action,
      onChange: action,
    });
  }
  handleSubmitCreate = (e) => {
    e.preventDefault();
    if (brandsStore.brandName === "") {
      ui.error();
    } else if (brandsStore.brandName.length) {
      this.checkBrandName(brandsStore.brandName);
      if (!brandsStore.brand) {
        brandsStore.addBrand({
          id: new Date().getTime().toString(),
          name: brandsStore.brandName,
          img: brandsStore.brandImg,
        });
        ui.success();
        brandsStore.setBrandName("");
        brandsStore.setBrandImg("");
        ui.setImageWarning(false);
        // window.location = "/searchBrands";
        setTimeout(() => {
          routingStore.push("/searchBrands");
        }, 1000);
      } else if (brandsStore.brand) {
        if (
          brandsStore.brandName.toLowerCase() ===
          brandsStore.brand.name.toLowerCase()
        ) {
          ui.brandExists();
        }
      }
    }
  };
  checkBrandName(brandName) {
    const newBrand = brandsStore.brands.find(
      (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
    );
    brandsStore.setBrand(newBrand);
  }
  onChange(e) {
    brandsStore.setBrandImg(e.target.value);
    ui.isValidUrl(brandsStore.brandImg);
  }
}

export const createBrandStore = new CreateBrandStore();
