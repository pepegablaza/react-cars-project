import { action, makeObservable } from "mobx";
import { brandsStore } from "../../../store/BrandsStore";
import { ui } from "../../../store/uiStore";

class SearchBrandStore {
  constructor() {
    makeObservable(this, {
      inputOnChange: action,
      selectOnChange: action,
      handleBrandsSort: action,
    });
  }
  inputOnChange(e) {
    brandsStore.setSearchTerm(e.target.value);
    ui.loadingEffect();
  }
  selectOnChange(e) {
    this.handleBrandsSort(e, e.target.value);
    ui.loadingEffect();
  }
  handleBrandsSort = (e, value) => {
    if (brandsStore.filteredBrands) {
      if (value === "asc") {
        const AscBrands = brandsStore.filteredBrands
          .slice()
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
        brandsStore.setBrands(AscBrands);
      } else if (value === "desc") {
        const DescBrands = brandsStore.filteredBrands
          .slice()
          .sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
          );
        brandsStore.setBrands(DescBrands);
      } else if (value === "recent") {
        const RecentBrands = brandsStore.filteredBrands
          .slice()
          .sort((a, b) => (a.id < b.id ? 1 : -1));
        brandsStore.setBrands(RecentBrands);
      } else {
        brandsStore.fetchAll();
        e.target.value = "sort";
      }
    }
  };
}

export const searchBrandStore = new SearchBrandStore();
