import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthguardService } from './services/authguard.service';
import { flagAuthGuard } from './newAuthGuard';

const routes: Routes = [
  {path:'',component:MainComponent,pathMatch:'full', canActivate: [flagAuthGuard('/login')]},
  {path:'emegencyAccess',component:MainComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
