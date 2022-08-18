import { Dictionary } from '../types/core';

export class Store {
  private state: Dictionary = {};

  public getState() {
    return this.state;
  }

  public setState(newValue: any) {
    Object.assign(this.state, newValue);
  }

  public setStateAndPersist(newValue: Dictionary, withoutStringify?: boolean) {
    Object.assign(this.state, newValue);
    const entries = Object.entries(newValue)[0];
    const key = entries[0];
    const value = withoutStringify ? entries[1] : JSON.stringify(entries[1]);
    // храним в localstorage
    localStorage.setItem(key.toString(), value);
  }
}

export default Store;
