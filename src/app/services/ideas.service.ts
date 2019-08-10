import { Injectable } from '@angular/core';
import { Idea } from '../models/idea';
import { Events } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class IdeasService {

	constructor(private events: Events) {
		events.subscribe('ideas:updated', () => {
			console.log('saving ideas permanently');
		});
	}


	private ideas: Idea[] = [
		new Idea('The main idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, new Date('2018-01-28'),  [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The oahd idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', false, new Date('2018-02-28'), [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The oahd idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', true, new Date('2018-03-28'), [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The second idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, new Date('2014-01-28'), [{ name: 'motivation', value: 5 }, { name: 'social status', value: 4 }]),
		new Idea('The third idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', false, new Date('2019-05-16'), [{ name: 'motivation', value: 3 }, { name: 'social status', value: 10 }]),
		new Idea('The third idea', 'batman Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, new Date('2019-08-10'), [{ name: 'motivation', value: 2 }, { name: 'social status', value: 2 }])
	];

	getIdeas(): Idea[] {
		return this.ideas;
	}
}
