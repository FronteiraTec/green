import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodigobarraPage } from './codigobarra.page';

describe('CodigobarraPage', () => {
  let component: CodigobarraPage;
  let fixture: ComponentFixture<CodigobarraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigobarraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodigobarraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
