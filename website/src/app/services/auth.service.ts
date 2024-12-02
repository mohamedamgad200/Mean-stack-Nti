import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://dummyjson.com/auth/login';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  postLogin(userName: string, password: string): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = {
    //   username: userName,
    //   password: password,
    //   expiresInMins: 30, // Optional, defaults to 60
    // };
    // return this.http.post(this.apiUrl, body, {
    //   headers,
    //   withCredentials: true,
    // });
    // return this.http
    //   .post<any>(this.apiUrl, { username: userName, password: password })
    //   .pipe(
    //     tap((response) => {
    //       if (response) {
    //         console.log(response);
    //       }
    //     })
    //   );
    return this.http
      .post<any>(this.apiUrl, { username: userName, password: password })
      .pipe(
        tap((response) => {
          if (response && response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
            this.tokenSubject.next(response.accessToken);
            console.log('Login successful:', response);
          }
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }
  logOut() {
    localStorage.removeItem('accesstoken');
    this.tokenSubject.next(null);
  }
  getAccessToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
  isLoggedIn(): boolean {
    console.log(this.tokenSubject.value !== null);
    return this.tokenSubject.value !== null;
  }
}
