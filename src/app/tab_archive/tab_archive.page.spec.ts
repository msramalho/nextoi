import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabArchivePage } from './tab_archive.page';

describe('TabArchivePage', () => {
  let component: TabArchivePage;
  let fixture: ComponentFixture<TabArchivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabArchivePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
