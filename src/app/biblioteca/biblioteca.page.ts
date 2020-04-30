import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  termoPesquisa = '';
  buscarPor = 'livre';
  resultadosPesquisa = [];
  
  // Inicializei a variável com alguns livros apenas para poder testar
  titulosPendentes = [
    {
      "titulo": "Java: como programar",
      "dataDevolucao": "Mon Apr 26 2020 18:44:50 GMT-0300 (Brasilia Standard Time)"
    },
    {
      "titulo": "Calculo A: funções, limite derivação e integração",
      "dataDevolucao": "Tue May 05 2020 18:44:50 GMT-0300 (Brasilia Standard Time)"
    },
    {
      "titulo": "Object-oriented thought process",
      "dataDevolucao": "Thu May 28 2020 18:44:50 GMT-0300 (Brasilia Standard Time)"
    },
  ];

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async renewBookToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Renovado com sucesso!',
      duration: 1100,
      position: 'top',
      mode: 'ios',
      buttons: [{ text: 'x' }],
    });
    toast.present();
  }

  async renewBookToastFail() {
    const toast = await this.toastController.create({
      header: "Não foi possível completar a ação!",
      message: `O exemplar encontra-se fora do prazo para renovação`,
      duration: 3000,
      position: 'top',
      mode: 'ios',
      buttons: [{ text: 'x' }],
    });
    toast.present();
  }

  // Esta função utiliza a data e hora do aparelho como base, ou seja, se o usuario alterar
  // o horário do mesmo ela não funciona de forma correta
  validarRenovacao(date: Date): boolean {
    let d1 = new Date(date).toDateString()
    let d2 = new Date().toDateString();

    let dataRetorno = new Date(d1);
    let dataAtual = new Date(d2);

    if (dataRetorno >= dataAtual) return true;
    if (dataRetorno < dataAtual) return false;
  }


  renovarLivro(livro: any) {
    if (this.validarRenovacao(livro.dataDevolucao)) {
      livro.dataDevolucao = new Date();
      livro.dataDevolucao.setDate(livro.dataDevolucao.getDate() + parseInt('10'));
      this.renewBookToastSuccess();
    }
    else
      this.renewBookToastFail();
  }

}
