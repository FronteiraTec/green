import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoUffsPage } from './info-uffs.page';

describe('InfoUffsPage', () => {
  let component: InfoUffsPage;
  let fixture: ComponentFixture<InfoUffsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUffsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoUffsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
