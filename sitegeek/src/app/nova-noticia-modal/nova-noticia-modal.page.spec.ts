import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaNoticiaModalPage } from './nova-noticia-modal.page';

describe('NovaNoticiaModalPage', () => {
  let component: NovaNoticiaModalPage;
  let fixture: ComponentFixture<NovaNoticiaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaNoticiaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaNoticiaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
