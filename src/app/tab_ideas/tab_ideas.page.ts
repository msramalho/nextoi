import { Component } from '@angular/core';

@Component({
	selector: 'app-tab_ideas',
	templateUrl: 'tab_ideas.page.html',
	styleUrls: ['tab_ideas.page.scss']
})
export class TabIdeas {

	knobValues: any = {
		lower: 0,
		upper: 10
	};
	constructor() { }

}
