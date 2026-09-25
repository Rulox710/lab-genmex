class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }

  mostrarInfo() {
    return `${this.nombre} cuesta $${this.precio} y${(this.disponible)?' ':' no '}está disponible`;
  }

  cambiarDisponibilidad() {
    this.disponible = !this.disponible;
  }
}

class Maquillaje extends Producto {
  constructor(nombre, precio, disponible, tono) {
    super(nombre, precio, disponible);
    this.tono = tono;
  }

  mostrarInfo() {
    return super.mostrarInfo() + ` y su tono es ${this.tono}`;
  }
}

const coca = new Producto('Coca-Cola', 22, true);
const shampoo = new Producto("Shampoo", 120, true);
const jabon = new Producto("Jabón", 35, false);
const labial = new Maquillaje("Labial", 250, false, "Rojo");
const base = new Maquillaje("Base", 380, true, "Beige");

console.log(coca.mostrarInfo());
console.log(shampoo.mostrarInfo());
console.log(jabon.mostrarInfo());
console.log(labial.mostrarInfo());
console.log(base.mostrarInfo());
