import { Component,NgModule } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  categoryList: string[] = [];

  searchTerm: string = '';

  constructor(private prodSrv: ProductService){
    this.prodSrv.getAllCategories().subscribe((res:string[])=>{
      this.categoryList = res;

    });
  }
  getAllCategory(){
  }
}
@NgModule({
  imports: [
    CommonModule
  ]
})
export class LayoutModule {}
