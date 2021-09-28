import { makeObservable, computed } from "mobx";
import { store } from "../../../store/CarsStore";

class FilteredCarStore {
  constructor() {
    makeObservable(this, {
      filteredCars: computed,
    });
  }

  get filteredCars() {
    const newCars = store.cars.filter((item) => {
      return (
        (item.brand.toLowerCase() + item.model.toLowerCase())
          .replace(/ +/g, "")
          .includes(store.searchTerm.toLowerCase().replace(/ +/g, "")) ||
        (item.model.toLowerCase() + item.brand.toLowerCase())
          .replace(/ +/g, "")
          .includes(store.searchTerm.toLowerCase().replace(/ +/g, ""))
      );
    });
    if (newCars.length) {
      return newCars;
    }
    return null;
  }
}

export const filteredCarStore = new FilteredCarStore();
