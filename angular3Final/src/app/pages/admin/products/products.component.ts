import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule], //to use ng
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean= false;

  productObj: any = {
    "id": 0,
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
        "rate": 0,
        "count": 0
    }
  };
  categoryList: string[] = []; //iniciar array para las categorias
  productList: any[] = []; //iniciar array para las productos

  constructor(private productSrv: ProductService){

  }

  ngOnInit(): void{
    this.getAllProducts();
    this.getAllCategory();

  }

  getAllCategory(){
    this.productSrv.getAllCategories().subscribe((res:string[])=>{
      this.categoryList = res;
      console.log(this.categoryList);
    }, (error) =>{
      console.error("Error fetching categories",error);
    });
  }
  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title:'Product creation status',
          text:'The product has been created succesfully.'
        })
      }else{
        Swal.fire({
          icon: 'error',
          title:'Product creation status',
          text:'Unable to create new product.'
        })
      }
    });
  }
  getAllProducts(){
    this.productSrv.getAllProducts().subscribe((res:any[])=>{
      this.productList = res;
      console.log(this.productList);
    }, (error) =>{
      console.error("Error fetching products",error);
    });
  }
}

