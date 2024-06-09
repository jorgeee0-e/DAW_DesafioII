import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryList: string[] = [];
  constructor(private prodSrv: ProductService){
    this.prodSrv.getAllCategories().subscribe((res:string[])=>{
      this.categoryList = res;

    });
  }
  getAllCategory(){

  }
}
