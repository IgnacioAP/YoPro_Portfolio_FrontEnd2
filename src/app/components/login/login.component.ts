import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email='testemail.com';
  password='123test';
  errorMessage:string='';
  loading: boolean = false;

  constructor(private authService:AuthService, private router:Router){}

LogIn(){
  this.loading = true;
  this.authService.login(this.email,this.password).subscribe(
    (response:any) => {
      localStorage.setItem('accessToken',response.accessToken);
      this.router.navigate(['/']);
    },(error) => {
      console.log("Login failed: ", error);
      this.errorMessage='Datos erroneos, por favor vuelve a intentar.';
    }
  );
  () => {
    this.loading = false;
  }
}

EmergencyLogin(){
  this.router.navigate(['/emegencyAccess']);
}

}