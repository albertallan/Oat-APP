import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NoticiaPage } from './noticia.page';

describe('NoticiaPage', () => {
  let component: NoticiaPage;
  let fixture: ComponentFixture<NoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
