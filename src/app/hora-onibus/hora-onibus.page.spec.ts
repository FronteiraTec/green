import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoraOnibusPage } from './hora-onibus.page';

describe('HoraOnibusPage', () => {
  let component: HoraOnibusPage;
  let fixture: ComponentFixture<HoraOnibusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraOnibusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoraOnibusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
