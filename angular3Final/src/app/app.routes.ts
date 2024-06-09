import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/website/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login', //By default si el path esta vacio, redirigirá al login, para que inicialmente cargue el login
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'products',
        component:ProductsComponent

      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      {
        path:'shop',
        component:LandingComponent
      },
      {
        path:'category/:category',
        component:CategoryProductsComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

