import { Component } from '@angular/core';
import { IFondation } from 'src/app/shared/interfaces/fondation';
import { FondationService } from '../fondation.service';

@Component({
  selector: 'app-recent-fondations',
  templateUrl: './recent-fondations.component.html',
  styleUrls: ['./recent-fondations.component.scss'],
})
export class RecentFondationsComponent {
  fondations: IFondation[] | null = null;

  errorFetching = false;
  constructor(private fondationService: FondationService) {}

  ngOnInit(): void {
    this.fondationService.loadFondations().subscribe({
      next: (value) => {
        this.fondations = value;
      },
      error: (err) => {
        this.errorFetching = true;
        console.error(err);
      },
    });
  }
}
