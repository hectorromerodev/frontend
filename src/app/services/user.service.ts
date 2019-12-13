import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private URL = "http://localhost:4232/api";
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<any>(`${this.URL}/profile`);
  }
}
