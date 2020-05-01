import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ru',
  templateUrl: './ru.page.html',
  styleUrls: ['./ru.page.scss'],
})
export class RuPage implements OnInit {

  // constructor() { }

 
  link: string;
  constructor(private sanitize: DomSanitizer){ }

  url(){
    this.link= "https://www.uffs.edu.br/campi/chapeco/restaurante_universitario";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.link);
  }

  ngOnInit() {
  }

}
