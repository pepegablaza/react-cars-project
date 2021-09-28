import { action, makeObservable } from "mobx";
import { store } from "../../../store/CarsStore";
import { ui } from "../../../store/uiStore";

class SearchCarStore {
  constructor() {
    makeObservable(this, {
      handleCarsSort: action,
      selectOnChange: action,
      inputOnChange: action,
    });
  }
  handleCarsSort = (e, value) => {
    if (store.filteredCars) {
      if (value === "asc") {
        const AscCars = store.filteredCars
          .slice()
          .sort((a, b) =>
            a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1
          );
        store.setCars(AscCars);
      } else if (value === "desc") {
        const DescCars = store.filteredCars
          .slice()
          .sort((a, b) =>
            a.brand.toLowerCase() < b.brand.toLowerCase() ? 1 : -1
          );
        store.setCars(DescCars);
      } else if (value === "recent") {
        const RecentCars = store.filteredCars
          .slice()
          .sort((a, b) => (a.id < b.id ? 1 : -1));
        store.setCars(RecentCars);
      } else {
        store.fetchAll();
        e.target.value = "sort";
      }
    }
  };

  selectOnChange(e) {
    this.handleCarsSort(e, e.target.value);
    ui.loadingEffect();
  }
  inputOnChange(e) {
    store.setSearchTerm(e.target.value);
    ui.loadingEffect();
  }
}

export const searchCarStore = new SearchCarStore();
