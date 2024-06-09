import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    userName:'',
    password:''
  }
  constructor(private router: Router){}

  onLogin(){
    if(this.loginObj.userName=="admin" && this.loginObj.password=="1234"){
      console.log("si entro equisde")
        this.router.navigateByUrl('/shop')
    } else{
      Swal.fire({
        icon: 'error',
        title:'Wrong credentials',
        text:'The username or password you entered is incorrect.'
      })

    }
  }
}
