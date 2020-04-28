import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public matricula = "";
  public senha = "";

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  // a função esta como assíncrona porque porque pensei em talvez usar o firebase para fazer alguns testes de verificação
  // this.router.navigate muda o endereço ../login para ../home, indo para a pagina principal. /home esta definido nas rotas, app-routing.module.ts
  async login() {
    try {
      if (this.matricula == "12345" && this.senha == "admin") {
        this.router.navigate(["home"]);
      } else {
        this.invalidDataToast();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async invalidDataToast() {
    let toast = await this.toastController.create({
      message: "Dados inválidos, verifique e tente novamente.",
      duration: 1000,
    });

    toast.present();
  }
}
