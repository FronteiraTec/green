import { Component, OnInit } from "@angular/core";
import { ToastController, MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public matricula = "";
  public senha = "";
  public showPassword:boolean = false;

  constructor(
    public menu: MenuController,
    private router: Router,
    private toastController: ToastController
  ) {
    this.activeMenu(); // função para desativar o menu na pagina de login *nao fucionou* coloquei no app.component.html gestureswipe como false, para nao ativar o menu no Login
  }

  activeMenu() {
    this.menu.enable(false, "menuLeft");
  }

  ngOnInit() {}

  // a função esta como assíncrona porque porque pensei em talvez usar o firebase para fazer alguns testes de verificação
  // this.router.navigate muda o endereço ../login para ../home, indo para a pagina principal. /home esta definido nas rotas, app-routing.module.ts
  async login() {
    try {
      if (this.matricula == "12345" && this.senha == "admin") {
        this.menu.enable(true, "menuLeft");
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
      position: 'top',
      mode: 'ios'
    });

    toast.present();
  }

  togglePasswordFieldType(){
    this.showPassword = !this.showPassword;
  }
}
