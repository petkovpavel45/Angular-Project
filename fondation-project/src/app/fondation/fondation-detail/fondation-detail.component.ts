import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFondation } from 'src/app/shared/interfaces';
import { FondationService } from '../fondation.service';

@Component({
  selector: 'app-fondation-detail',
  templateUrl: './fondation-detail.component.html',
  styleUrls: ['./fondation-detail.component.scss'],
})
export class FondationDetailComponent {
  fondation: IFondation | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fondationService: FondationService
  ) {
    const fondationId = this.activatedRoute.snapshot.params?.['id'];
    this.fondationService.getFondation(fondationId).subscribe((fondation) => {
      this.fondation = fondation;
      // this.router.navigate(['/fondation/recent'])
    });
  }
}
