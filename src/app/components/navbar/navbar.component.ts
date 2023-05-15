import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @ViewChild(MainComponent) mainComponent:MainComponent="";

  constructor(private authService:AuthService){}
  nombreDeUsuario:string=this.authService.getSub();
  
  ngOnInit(): void {
  }


  scrollToStart(){
    console.log(this.nombreDeUsuario);
    const element=document.getElementById("section1");
    element?.scrollIntoView({behavior:"smooth",block:"start"});
  }
  scrollToInfoDisplay(){
    const element=document.getElementById("section2");
    element?.scrollIntoView({behavior:"smooth",block:"start"});
  }
  scrollToProjects(){
    const element=document.getElementById("section3");
    element?.scrollIntoView({behavior:"smooth",block:"start"});
  }
  scrollToContact(){
    const element=document.getElementById("section4");
    element?.scrollIntoView({behavior:"smooth",block:"start"})
  }

  userLogout(){
    this.authService.logout();
  }
}
