import { computed } from "mobx";
import { makeObservable } from "mobx";
import { brandsStore } from "../../../store/BrandsStore";

class FilteredBrandsStore {
  constructor() {
    makeObservable(this, {
      filteredBrands: computed,
    });
  }
  get filteredBrands() {
    const newBrands = brandsStore.brands.filter((item) => {
      return item.name
        .toLowerCase()
        .replace(/ +/g, "")
        .includes(brandsStore.searchTerm.toLowerCase().replace(/ +/g, ""));
    });
    if (newBrands.length) {
      return newBrands;
    }
    return null;
  }
}

export const filteredBrandsStore = new FilteredBrandsStore();
