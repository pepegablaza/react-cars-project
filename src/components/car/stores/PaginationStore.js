import { action, makeObservable, computed, observable } from "mobx";
import { store } from "../../../store/CarsStore";

class PaginationStore {
  currentPage = 1;
  itemsPerPage = 6;
  activeClass = { active: null };
  constructor() {
    makeObservable(this, {
      currentPage: observable,
      itemsPerPage: observable,
      activeClass: observable,
      onClick: action,
      renderNumbers: action,
      setCurrentPage: action,
      setActiveClass: action,
      numbers: computed,
      indexOfFirstItem: computed,
      indexOfLastItem: computed,
      currentCars: computed,
    });
  }
  setCurrentPage(number) {
    this.currentPage = number;
  }
  setActiveClass(number) {
    this.activeClass = { active: number };
  }
  onClick(number) {
    this.setCurrentPage(number);
    this.setActiveClass(number);
  }
  renderNumbers(itemsArray) {
    let numbers = [];
    for (
      let i = 1;
      i <= Math.ceil(itemsArray.length / this.itemsPerPage);
      i++
    ) {
      numbers.push(i);
    }
    return numbers;
  }
  get numbers() {
    const numbers = this.renderNumbers(store.cars);
    return numbers;
  }
  get indexOfLastItem() {
    return this.currentPage * this.itemsPerPage;
  }
  get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }
  get currentCars() {
    const currentCars = store.cars.slice(
      this.indexOfFirstItem,
      this.indexOfLastItem
    );
    return currentCars;
  }
}
export const paginationStore = new PaginationStore();
