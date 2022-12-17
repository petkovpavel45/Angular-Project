import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IFondation } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FondationService implements OnDestroy {
  private fondation$$ = new BehaviorSubject<undefined | null | IFondation>(
    undefined
  );
  fondation$ = this.fondation$$
    .asObservable()
    .pipe(filter((val): val is IFondation | null => val !== undefined));

  fondation: IFondation | null = null;

  subscription: Subscription;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.subscription = this.fondation$.subscribe((fondation) => {
      this.fondation = fondation;
    });
  }
  userId = this.authService.user?._id;
  loadFondations() {
    return this.http.get<IFondation[]>('/api/fondations');
  }

  getFondation(id: string) {
    return this.http
      .get<IFondation>('/api/fondations/' + id)
      .pipe(tap((fondation) => this.fondation$$.next(fondation)));
  }

  createFondation(
    title: string,
    description: string,
    location: string,
    img: string
  ) {
    return this.http
      .post<IFondation>('/api/fondations', {
        title,
        description,
        location,
        img,
      })
      .pipe(tap((fondation) => this.fondation$$.next(fondation)));
  }

  updateFondation(
    fondationId: string,
    title: string,
    description: string,
    location: string,
    img: string
  ) {
    return this.http
      .put<IFondation>('/api/fondations/' + fondationId, {
        title,
        description,
        location,
        img,
      })
      .pipe(tap((fondation) => this.fondation$$.next(fondation)));
  }

  deleteFondation(fondationId: string) {
    return this.http
      .delete<IFondation>('/api/fondations/' + fondationId)
      .pipe(tap((fondation) => this.fondation$$.next(fondation)));
  }

  makeDonate(fondationId: string, userId: string) {
    return this.http
      .put<IFondation>('/api/donations/' + fondationId, { fondationId, userId })
      .pipe(tap((fondation) => this.fondation$$.next(fondation)));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
