class ImplicitObject {
  generateFromRaw(raw) {
    Object.entries(raw).forEach(([key, value]) => {
      this.hasOwnProperty(key) ? this[key] = value : {};
    });
  }

}

export { ImplicitObject };