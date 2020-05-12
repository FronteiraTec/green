import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "notas",
    loadChildren: () =>
      import("./notas/notas.module").then((m) => m.NotasPageModule),
  },
  {
    path: "horarios",
    loadChildren: () =>
      import("./horarios/horarios.module").then((m) => m.HorariosPageModule),
  },
  {
    path: "hora-onibus",
    loadChildren: () =>
      import("./hora-onibus/hora-onibus.module").then(
        (m) => m.HoraOnibusPageModule
      ),
  },
  {
    path: "material",
    loadChildren: () =>
      import("./material/material.module").then((m) => m.MaterialPageModule),
  },
  {
    path: "biblioteca",
    loadChildren: () =>
      import("./biblioteca/biblioteca.module").then(
        (m) => m.BibliotecaPageModule
      ),
  },
  {
    path: "ru",
    loadChildren: () => import("./ru/ru.module").then((m) => m.RuPageModule),
  },
  {
    path: "configuracao",
    loadChildren: () =>
      import("./configuracao/configuracao.module").then(
        (m) => m.ConfiguracaoPageModule
      ),
  },
  {
    path: "hora-onibus",
    loadChildren: () =>
      import("./hora-onibus/hora-onibus.module").then(
        (m) => m.HoraOnibusPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },  {
    path: 'codigobarra',
    loadChildren: () => import('./codigobarra/codigobarra.module').then( m => m.CodigobarraPageModule)
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
