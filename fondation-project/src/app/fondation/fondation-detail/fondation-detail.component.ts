import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFondation } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-fondation-detail',
  templateUrl: './fondation-detail.component.html',
  styleUrls: ['./fondation-detail.component.scss']
})
export class FondationDetailComponent {
  fondation: IFondation | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    const fondation = this.activatedRoute.snapshot.data?.['fondation'];
    this.fondation = fondation;
  }
}
