import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  user = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signIn() {
    this.authService.signIn(this.user).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/profile"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
