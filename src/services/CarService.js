class CarService {
  async fetchAll() {
    try {
      const response = await fetch("http://localhost:8000/cars/");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getCar(id) {
    try {
      const response = await fetch("http://localhost:8000/cars/" + id);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  addCar(newCar) {
    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCar),
    }).catch((err) => console.log(err));
  }

  updateCar(newCar, id) {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCar),
    })
      .then(() => this.fetchAll())
      .catch((err) => console.log(err));
  }

  deleteCar(id) {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "DELETE",
    }).catch((err) => console.log(err));
  }
}

export const carService = new CarService();
