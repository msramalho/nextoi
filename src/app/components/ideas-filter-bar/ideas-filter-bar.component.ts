import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
	selector: 'app-ideas-filter-bar',
	templateUrl: './ideas-filter-bar.component.html',
	styleUrls: ['./ideas-filter-bar.component.scss'],
})
export class IdeasFilterBarComponent implements OnInit {

	knobValues = {
		lower: 0,
		upper: 10
	};

	searchBar = '';
	constructor(public events: Events) { }

	ngOnInit() { }

	filterIdeasChanged() {
		this.events.publish('knobValues:updated', this.knobValues);
	}

	searchBarChanged() {
		this.events.publish('searchBar:updated', this.searchBar);
	}
}
