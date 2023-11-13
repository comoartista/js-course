class Product {
    constructor(title, img, descr, price) {
        this.title = title;
        this.imgUrl = img;
        this.price = price;
        this.descr = descr;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
 
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => {
            return prevValue + curItem.price;
        }, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart' )
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!t</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component{
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    };

    addToCart() {
        App.addProductToCart(this.product);  
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item' )
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imgUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.descr}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
}

class ProductList extends Component{
    products = [
        new Product(
            'A Pillow', 
            'https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'A soft pilow!',
            19.99,
        ),
        new Product(
            'A Carpet', 
            'https://images.unsplash.com/photo-1597665863042-47e00964d899?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'You would like!',
            89.99,
        ),
    ];
    constructor(renderHookId) {
        super(renderHookId);
    };

    render() {
        this.createRootElement('ul', 'prod-list', [new ElementAttribute('id', 'prod-list')]);
        for(const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }

    }
}

class Shop {
    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();

        const productList = new ProductList('app'); 
        const productListEl = productList.render(); 

    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();