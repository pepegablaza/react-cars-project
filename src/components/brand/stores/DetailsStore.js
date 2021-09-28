import { computed } from "mobx";
import { makeObservable } from "mobx";
import routingStore from "../../../store/RouterStore";

class DetailsStore {
  constructor() {
    makeObservable(this, {
      id: computed,
    });
  }
  get id() {
    const id = routingStore.history.location.state.id;
    return id;
  }
}

export const detailsStore = new DetailsStore();
