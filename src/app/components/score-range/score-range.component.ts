import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
	selector: 'app-score-range',
	templateUrl: './score-range.component.html',
	styleUrls: ['./score-range.component.scss'],
})
export class ScoreRangeComponent implements OnInit {

	knobValues = {
		lower: 0,
		upper: 10
	};
	constructor(public events: Events) { }

	ngOnInit() { }

	filterIdeasChanged() {
		this.events.publish('knobValues:updated', this.knobValues);
	}
}
