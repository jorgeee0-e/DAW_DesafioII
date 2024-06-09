import { CommonModule } from '@angular/common';
import { AfterViewInit, Component,OnInit,ElementRef, ViewChild, AfterViewChecked  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../../admin/products/products.component';
import { ProductService } from '../../services/product/product.service';
import * as  bootstrap from 'bootstrap';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit,AfterViewInit {
  @ViewChild('exModal') exModal!:ElementRef;

  productList: any[] = [];
  productSelected: any = {};
  categoryList: string[] = [];


  constructor(private prodSrv: ProductService){
  }
  ngAfterViewInit(): void {
    const modal = new bootstrap.Modal(this.exModal.nativeElement);
  }

  ngOnInit():void{
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts(){
    this.prodSrv.getAllProducts().subscribe((res:any[])=>{
      this.productList = res;
      console.log(this.productList);
    }, (error) =>{
      console.error("Error fetching products",error);
    });
  }

  getAllCategory(){
    this.prodSrv.getAllCategories().subscribe((res:string[])=>{
      this.categoryList = res;
      console.log(this.categoryList);
    }, (error) =>{
      console.error("Error fetching categories",error);
    });
  }

  getProduct(product:any) {
    console.log(product)
    this.productSelected = product
  }



}
