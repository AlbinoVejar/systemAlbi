export class Ubication {
  constructor(bornPlace: string, address: string,col: string, postalCode: string, phone: string) {
    this.ciudad = bornPlace;
    this.direccion = address;
    this.colonia = col;
    this.codigoPostal = postalCode;
    this.telefono = phone;
  }
  ciudad: string;
  direccion: string;
  colonia: string;
  codigoPostal: string;
  telefono: string;
}
