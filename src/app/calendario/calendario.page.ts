import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  dateRange: { from: string; to: string; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    monthFormat: this.type,
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    weekStart: 1,
    //defaultDate: new Date()
  };


  constructor() { }

  ngOnInit() {
  }
  

}
