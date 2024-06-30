import { Category } from "./category";

export class Game {

    id: number;
    name: string;
    img: string;
    descripcion: string;
    categoryId: number;
    price: number;

    constructor(id: number, name: string, img: string, descripcion: string, categoryId: number, price: number) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.descripcion = descripcion;
        this.categoryId = categoryId;
        this.price = price;
    }
}

