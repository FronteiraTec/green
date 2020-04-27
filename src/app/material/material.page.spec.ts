import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterialPage } from './material.page';

describe('MaterialPage', () => {
  let component: MaterialPage;
  let fixture: ComponentFixture<MaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
