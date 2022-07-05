export default class Storage {
  constructor(data) {
    this.data = data;
  }

  storedData() {
    localStorage.setItem('form', JSON.stringify(this.data));
  }

  static getData() {
    const receivedData = localStorage.getItem('form');
    if (receivedData) {
      return JSON.parse(receivedData);
    }
    return JSON.parse(receivedData);
  }
}
