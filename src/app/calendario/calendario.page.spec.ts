import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarioPage } from './calendario.page';

describe('CalendarioPage', () => {
  let component: CalendarioPage;
  let fixture: ComponentFixture<CalendarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
