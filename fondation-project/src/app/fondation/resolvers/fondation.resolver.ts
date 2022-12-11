import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IFondation } from "../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class FondationResolver implements Resolve<IFondation | null> {
  constructor(private apiService: ApiService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IFondation | null | Observable<IFondation> | Promise<IFondation> {
    const fondationId = route.params['id'];
    if (!fondationId) {
      this.router.navigate(['/fondation/recent']);
      return null;
    }
    return this.apiService.loadFondation(fondationId);
  }


}