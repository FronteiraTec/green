import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public selectedIndex = 0;

  public appMenu = [
    { title: "Home", url: "/home", icon: "home" },
    { title: "Notas", url: "/notas", icon: "create" },
    { title: "Horários Aula", url: "/horarios", icon: "time" },
    { title: "Material Didático", url: "/material", icon: "book" },
    { title: "Biblioteca", url: "/biblioteca", icon: "library" },
    { title: "RU", url: "/ru", icon: "restaurant" },
    { title: "Auto Viação", url: "/hora-onibus", icon: "bus" },
    { title: "Calendario Acadêmico", url: "/calendario", icon: "calendar" },
    { title: "Configurações", url: "/configuracao", icon: "settings" },
    { title: "Sair", url: "/login", icon: "exit" },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#07613b');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("home/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appMenu.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
