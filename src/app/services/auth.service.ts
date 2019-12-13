import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  //We can use envirorment variables
  private URL = "http://localhost:4232/api";
  constructor(private http: HttpClient, private router: Router) {}
  signUp(user) {
    //With <any> we can use an interface
    return this.http.post<any>(`${this.URL}/register `, user);
  }
  signIn(user) {
    return this.http.post<any>(`${this.URL}/signin`, user);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem("token");
    //I can use this too...
    // if (!localStorage.getItem("token")) return true;
    // else return false;
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/signin"]);
  }
}
