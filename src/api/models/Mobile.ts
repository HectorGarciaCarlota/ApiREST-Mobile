class Mobile {
  readonly #_id: number;
  #_model: string;
  #_price: number;
  #_inches: number;
  #_ram: number;
  #_cpu: number;


  static nextId = 1;

  constructor(model: string, price: number, inches: number, ram: number, cpu: number) {
    this.#_id += Mobile.nextId;
    this.#_model = model;
    this.#_price = price;
    this.#_inches = inches;
    this.#_ram = ram;
    this.#_cpu = cpu;
  }


  get _id(): number {
    return this.#_id;
  }
}

export default Mobile;
