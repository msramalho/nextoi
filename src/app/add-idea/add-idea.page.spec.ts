import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdeaPage } from './add-idea.page';

describe('AddIdeaPage', () => {
  let component: AddIdeaPage;
  let fixture: ComponentFixture<AddIdeaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdeaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
