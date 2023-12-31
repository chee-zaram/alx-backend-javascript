export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return `${this._size}`;
    }

    if (type === 'string') {
      return `${this._location}`;
    }

    return this;
  }
}
