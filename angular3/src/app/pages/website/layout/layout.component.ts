import { Component,NgModule,ChangeDetectionStrategy  } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  categoryList: string[] = [];
  productSelected: any = {};
  searchTerm: string = '';

  constructor(private prodSrv: ProductService,public  cartService: CartService){
    this.prodSrv.getAllCategories().subscribe((res:string[])=>{
      this.categoryList = res;

    });
  }
  getAllCategory(){
  }
  getProductDetails(id: string){};

  loadCartDetails() {
    this.cart = this.cartService.getCart();

    // Get product details
    this.cart.products.forEach((item: any) => {
      this.prodSrv.getProductDetails(item.productId.toString()).subscribe((productDetails: any) => {
        productDetails = this.getProductDetails(item.productId);
      });
    });
  }

  pagar(){
    Swal.fire({
      icon: 'success',
      title:'Pago',
      text:'Pago procesado con exito.'
    });
    this.cancelar();
  }

  cancelar(){
    localStorage.clear();
    this.cartService.countUnique();
    window.location.reload();
  }
  uniqueProducts= this.cartService.countUnique();
  cart= this.cartService.getCart();


  getProduct(product:any) {
    console.log(product)
    this.productSelected = product
  }

  parseToInt(value: string): number {
    return parseInt(value, 10);
  }


}
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ]
})
export class LayoutModule {}
