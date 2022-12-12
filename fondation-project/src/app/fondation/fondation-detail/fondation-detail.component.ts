import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IFondation } from 'src/app/shared/interfaces';
import { FondationService } from '../fondation.service';

@Component({
  selector: 'app-fondation-detail',
  templateUrl: './fondation-detail.component.html',
  styleUrls: ['./fondation-detail.component.scss'],
})
export class FondationDetailComponent {
  fondation: IFondation | undefined;
  fondationId = this.activatedRoute.snapshot.params?.['id'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private fondationService: FondationService,
    private authService: AuthService,
    private router: Router
  ) {
    this.fondationService
      .getFondation(this.fondationId)
      .subscribe((fondation) => {
        this.fondation = fondation;
      });
  }
  get isNotLoggedIn() {
    return this.authService.user?._id === undefined;
  }
  get isOwner() {
    return this.authService.user?._id === this.fondation?._ownerId;
  }

  deleteHandler() {
    this.fondationService.deleteFondation(this.fondationId).subscribe(() => {
      this.router.navigate(['/fondation/recent']);
    });
  }
}
