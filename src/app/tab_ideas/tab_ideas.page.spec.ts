import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabIdeasPage } from './tab_ideas.page';

describe('TabIdeasPage', () => {
	let component: TabIdeasPage;
	let fixture: ComponentFixture<TabIdeasPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TabIdeasPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(TabIdeasPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
