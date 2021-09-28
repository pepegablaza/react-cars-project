import { observable, action, makeObservable } from "mobx";
import routingStore from "./RouterStore";

class uiStore {
  errorMessage = false;
  successMessage = false;
  edit = false;
  loading = false;
  imageWarning = false;
  imageSuccess = false;
  existingBrandName = false;

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      successMessage: observable,
      edit: observable,
      loading: observable,
      imageWarning: observable,
      imageSuccess: observable,
      existingBrandName: observable,
      setErrorMessage: action,
      setSuccessMessage: action,
      setEdit: action,
      setLoading: action,
      setImageWarning: action,
      setImageSuccess: action,
      setExistingBrandName: action,
      loadingEffect: action,
      error: action,
      success: action,
      isValidUrl: action,
      brandExists: action,
      goBack: action,
    });
  }
  setErrorMessage() {
    this.errorMessage = !this.errorMessage;
  }
  setSuccessMessage() {
    this.successMessage = !this.successMessage;
  }
  setEdit() {
    this.edit = !this.edit;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  setLoading(value) {
    this.loading = value;
  }
  setImageWarning(value) {
    this.imageWarning = value;
  }
  setImageSuccess(value) {
    this.imageSuccess = value;
  }
  setExistingBrandName(value) {
    this.existingBrandName = value;
  }
  loadingEffect() {
    ui.setLoading(true);
    setTimeout(() => {
      ui.setLoading(false);
    }, 800);
  }
  error() {
    ui.setErrorMessage();
    setTimeout(() => {
      ui.setErrorMessage();
    }, 1800);
  }
  success() {
    ui.setSuccessMessage();
    setTimeout(() => {
      ui.setSuccessMessage();
    }, 1800);
  }
  isValidUrl(url) {
    try {
      if (url) {
        new URL(url);
        ui.setImageWarning(false);
        ui.setImageSuccess(true);
        setTimeout(() => {
          ui.setImageSuccess(false);
        }, 1300);
      } else {
        ui.setImageWarning(false);
      }
    } catch (e) {
      ui.setImageWarning(true);
    }
  }
  brandExists() {
    ui.setExistingBrandName(true);
    setTimeout(() => {
      ui.setExistingBrandName(false);
    }, 1800);
  }
  goBack() {
    routingStore.goBack();
  }
}
export const ui = new uiStore();
