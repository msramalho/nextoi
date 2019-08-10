import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaListComponent } from './idea-list.component';

describe('IdeaListComponent', () => {
	let component: IdeaListComponent;
	let fixture: ComponentFixture<IdeaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IdeaListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IdeaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
