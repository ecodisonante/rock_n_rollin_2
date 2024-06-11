import { Category } from "./category";

export class Game {

    id: number;
    name: string;
    img: string;
    descripcion: string;
    category: Category;
    price: number;

    constructor(id: number, name: string, img: string, descripcion: string, category: Category, price: number) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.descripcion = descripcion;
        this.category = category;
        this.price = price;
    }
}

