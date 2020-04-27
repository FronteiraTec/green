import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RuPage } from './ru.page';

describe('RuPage', () => {
  let component: RuPage;
  let fixture: ComponentFixture<RuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
