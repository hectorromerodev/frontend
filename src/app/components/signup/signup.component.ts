import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signUp() {
    this.authService.signUp(this.user).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/profile"]);
      },
      err => console.log(err)
    );
  }
}
