import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'userCart';
    constructor() { }

  getCart() { //obtener el carrito del localStorage si existe, sino, inicializarlo
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : { userId: 1, date: new Date(), products: [] };
  }

  saveCart(cart: any) { //guardar carrito al localStorage
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  addToCart(productId: number) { //agregar productos al carrito antes de mandarlo a localStorage
    const cart = this.getCart();
    const productIndex = cart.products.findIndex((p: any) => p.productId === productId);

    if (productIndex > -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });

    }
    cart.date = new Date(); // Update date every time a product is added
    this.saveCart(cart);
    console.log('Cart after adding product:', cart);

    Swal.fire({
      icon: 'success',
      title:'Pedido',
      text:'Item agregado al carrito exitosamente.'
    })

    const items = this.countUnique();
    window.location.reload();

}

countUnique(){
  const cart = this.getCart();
  return cart.products.length;
}


}




