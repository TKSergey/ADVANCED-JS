'use strict';
class ProductList {
    constructor(container = '.mainContainer') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50
            },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }

    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
    }
}

class ProductItem {
    constructor(product, img = 'img/prod.image.jpg') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3 class="product-title>${this.title}</h3>
                <p class="product-price">${this.price}</p>
                <button class="by-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {

    }
}

class ElemBasket {
    render() {

    }
}