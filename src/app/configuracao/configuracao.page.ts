import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-configuracao",
  templateUrl: "./configuracao.page.html",
  styleUrls: ["./configuracao.page.scss"],
})
export class ConfiguracaoPage implements OnInit {
  public config1: boolean = true;
  public config2: boolean = true;
  public config3: boolean = true;

  constructor() {}

  ngOnInit() {}
}
