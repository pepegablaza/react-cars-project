import { observable, action, makeObservable, autorun, runInAction } from "mobx";
import { carService } from "../services/CarService";
import { ui } from "../store/uiStore";

class CarsStore {
  cars = [];
  car = {};
  searchTerm = "";
  brandId = "";
  model = "";
  image = "";
  specs = "";

  constructor() {
    makeObservable(this, {
      cars: observable,
      car: observable,
      searchTerm: observable,
      brandId: observable,
      model: observable,
      image: observable,
      specs: observable,
      fetchAll: action,
      getCar: action,
      addCar: action,
      updateCar: action,
      deleteCar: action,
      setCars: action,
      setCar: action,
      setSearchTerm: action,
      setBrandId: action,
      setModel: action,
      setImage: action,
      setSpecs: action,
      setCarBrand: action,
      setCarModel: action,
      setCarImage: action,
      setCarSpecs: action,
      setCarBrandLogo: action,
    });
  }
  async fetchAll() {
    const carsData = await carService.fetchAll();
    runInAction(() => {
      ui.loadingEffect();
      this.setCars(carsData);
    });
  }
  async getCar(id) {
    const carData = await carService.getCar(id);
    this.setCar(carData);
  }
  async addCar(data) {
    await carService.addCar(data);
    const newCars = [data, ...this.cars];
    this.setCars(newCars);
  }
  async updateCar(data, id) {
    await carService.updateCar(data, id);
    const carsData = await carService.fetchAll();
    ui.loadingEffect();
    this.setCars(carsData);
  }

  async deleteCar(id) {
    await carService.deleteCar(id);
    const newCars = this.cars.filter((car) => car.id !== id);
    ui.loadingEffect();
    this.setCars(newCars);
  }
  dispose = autorun(() => {
    this.fetchAll();
  });
  setCars(newCars) {
    this.cars = newCars;
  }
  setCar(newCar) {
    this.car = newCar;
  }
  setSearchTerm(value) {
    this.searchTerm = value;
  }
  setBrandId(newId) {
    this.brandId = newId;
  }
  setModel(newModel) {
    this.model = newModel;
  }
  setImage(link) {
    this.image = link;
  }
  setSpecs(value) {
    this.specs = value;
  }
  setCarBrand(newBrand) {
    this.car.brand = newBrand;
  }
  setCarModel(newModel) {
    this.car.model = newModel;
  }
  setCarImage(newImage) {
    this.car.image = newImage;
  }
  setCarSpecs(value) {
    this.car.specs = value;
  }
  setCarBrandLogo(value) {
    this.car.logo = value;
  }
}
export const store = new CarsStore();
