import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IFondation } from 'src/app/shared/interfaces/fondation';

@Component({
  selector: 'app-recent-fondations',
  templateUrl: './recent-fondations.component.html',
  styleUrls: ['./recent-fondations.component.scss'],
})
export class RecentFondationsComponent {
  fondations: IFondation[] | null = null;

  errorFetching = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadFondations().subscribe({
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
