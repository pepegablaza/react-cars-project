import { observable, action, makeObservable, autorun, runInAction } from "mobx";
import { brandService } from "../services/BrandService";
import { ui } from "./uiStore";

class BrandsStore {
	brands = [];
	brand = {};
	brandName = "";
	searchTerm = "";
	brandImg = "";

	constructor() {
		makeObservable(this, {
			brands: observable,
			brand: observable,
			brandName: observable,
			brandImg: observable,
			searchTerm: observable,
			fetchAll: action,
			getBrand: action,
			addBrand: action,
			updateBrand: action,
			deleteBrand: action,
			setBrands: action,
			setBrand: action,
			setBrandName: action,
			setBrandImg: action,
			setBrandsName: action,
			setBrandsImg: action,
			setSearchTerm: action,
		});
	}
	async fetchAll() {
		const brandsData = await brandService.fetchAll();
		ui.loadingEffect();
		runInAction(() => {
			this.setBrands(brandsData);
		});
	}
	async getBrand(id) {
		const brandData = await brandService.getBrand(id);
		this.setBrand(brandData);
	}
	async addBrand(data) {
		await brandService.addBrand(data);
		const newBrands = [data, ...this.brands];
		this.setBrands(newBrands);
	}
	async updateBrand(data, id) {
		await brandService.updateBrand(data, id);
		const brandsData = await brandService.fetchAll();
		ui.loadingEffect();
		this.setBrands(brandsData);
	}
	async deleteBrand(id) {
		await brandService.deleteBrand(id);
		const newBrands = this.brands.filter((brand) => brand.id !== id);
		ui.loadingEffect();
		this.setBrands(newBrands);
	}
	dispose = autorun(() => {
		this.fetchAll();
	});
	setBrands(value) {
		this.brands = value;
	}
	setBrand(value) {
		this.brand = value;
	}
	setSearchTerm(value) {
		this.searchTerm = value;
	}
	setBrandName(value) {
		this.brandName = value;
	}
	setBrandImg(value) {
		this.brandImg = value;
	}
	setBrandsName(value) {
		this.brand.name = value;
	}
	setBrandsImg(value) {
		this.brand.img = value;
	}
}
export const brandsStore = new BrandsStore();
