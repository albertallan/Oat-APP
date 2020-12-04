import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpiniaoModalPage } from './opiniao-modal.page';

describe('OpiniaoModalPage', () => {
  let component: OpiniaoModalPage;
  let fixture: ComponentFixture<OpiniaoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpiniaoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpiniaoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
