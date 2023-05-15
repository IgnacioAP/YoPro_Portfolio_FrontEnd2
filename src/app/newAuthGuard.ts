import { CanActivateFn } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export function flagAuthGuard(redirectDir:string): CanActivateFn{
    return()=>{
        const auth:AuthService=inject(AuthService);
        const router:Router=inject(Router);
        return auth.loggedIn?true:router.createUrlTree([redirectDir])
    }
}