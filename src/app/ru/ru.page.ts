import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-ru",
  templateUrl: "./ru.page.html",
  styleUrls: ["./ru.page.scss"],
})
export class RuPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async barra() {
    this.router.navigate(["home"]);
  }
}
