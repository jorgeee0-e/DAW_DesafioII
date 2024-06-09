import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import bootstrap, {Modal} from 'bootstrap';
import { SharedService } from '../../services/sharedService/shared.service';
@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit {

  productList: any[] = [];
  searchTerm: string = '';
  selectedProduct: any = null;
  productSelected: any = {};

  constructor(private route: ActivatedRoute, private prodSrv: ProductService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchTerm = params.get('category') || '' ; // Obtener la categoría de la URL si está presente
      if (this.searchTerm) {
        this.getProductsByCat(this.searchTerm);
      }
    });
  }
  getProductsByCat(category:string):void{
    this.prodSrv.getProductsByCat(category).subscribe(
      (res:any[])=>{
      this.productList = res;
    }, (error)=>{
      console.error("Error fetching products for category", error)
    })
  }
  searchProductsByCat():void{
    this.getProductsByCat(this.searchTerm);
  }

  getProduct(product:any) {
    console.log(product)
    this.productSelected = product
  }

}
