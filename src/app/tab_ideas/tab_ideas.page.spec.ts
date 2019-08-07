import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabIdeas } from './tab_ideas.page';

describe('TabIdeas', () => {
  let component: TabIdeas;
  let fixture: ComponentFixture<TabIdeas>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabIdeas],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabIdeas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
