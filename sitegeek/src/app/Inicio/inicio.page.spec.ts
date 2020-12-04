import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { IncioPage } from './inicio.page';

describe('IncioPage', () => {
  let component: IncioPage;
  let fixture: ComponentFixture<IncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
