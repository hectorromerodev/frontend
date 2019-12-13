import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  users = [];
  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.usersService.getProfile().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    );
  }
}
