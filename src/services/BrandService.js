class BrandService {
  async fetchAll() {
    try {
      const response = await fetch("http://localhost:8001/brands/");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getBrand(id) {
    try {
      const response = await fetch("http://localhost:8001/brands/" + id);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  addBrand(newBrand) {
    fetch("http://localhost:8001/brands", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBrand),
    }).catch((err) => console.log(err));
  }

  updateBrand(newBrand, id) {
    fetch(`http://localhost:8001/brands/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBrand),
    })
      .then(() => this.fetchAll())
      .catch((err) => console.log(err));
  }

  deleteBrand(id) {
    fetch(`http://localhost:8001/brands/${id}`, {
      method: "DELETE",
    }).catch((err) => console.log(err));
  }
}

export const brandService = new BrandService();
