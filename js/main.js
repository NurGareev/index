'use strict'
class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = []; // массив товароов 
        this._fetchProducts();
    } 
    _fetchProducts(){
        this.goods = [
    {id: 1, title: 'Notebook', price: "от 20000 р",image: "img/1.jpg",},
    {id: 2,title: 'Mouse', price: " от 230 р", image: "img/2.jpg",},
    {id: 3,title: 'Keyboard', price: " от 500 р", image: "img/3.jpg",},
    {id: 4,title: 'Gamepad', price:"от 550 р", image: "img/4.jpg",},
];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    
}
class ProductItem{
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.image = product.image;
		
	}
render(){
    return `<div class="product-item" data-id="${this.id}">
            <img src="${this.image}" alt="goods img">
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            <button class="buy-btn">Купить</button>
            </div>`
        }
}// Это функция формирует элемент одного товара  в HTML

class Cart {
    constructor(){
        this.addGoods = []; // массив с добавленными товарами 
    }

    addToCart(cartItem) {
        this.goods.push(cartItem)
    } // добавление товара (button)
    deletFromCart() {} // удаления из корзины(button)
    openCart(){} // открываение корзины (button)
    
}

let list = new ProductsList();
list.render();