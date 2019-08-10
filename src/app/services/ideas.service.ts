import { Injectable } from '@angular/core';
import { Idea } from '../models/idea';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { serialize, deserialize } from 'serializer.ts/Serializer';

@Injectable({
	providedIn: 'root'
})
export class IdeasService {

	private ideas: Idea[] = [];
	private ready: any;
	// private ideas: Idea[] = [
	// 	new Idea('The main idea', 'Add new ideas as they come and delete or archive this one when ready.', false, new Date(), [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }])
	// ];

	constructor(private events: Events, private storage: Storage) {
		this.ready = new Promise((resolve, _) => {
			this.storage.get('ideas').then(ideas => {
				this.ideas = deserialize<Idea[]>(Idea, ideas);
				events.subscribe('ideas:updated', () => {
					this.storage.set('ideas', serialize(this.ideas));
				});
				resolve();
			});
		});
	}

	async getIdeas(): Promise<Idea[]> {
		return this.ready.then(() => this.ideas);
	}

	addIdea(title: string, description: string) {
		this.ideas.push(new Idea(title, description, false, new Date(), []));
		this.events.publish('ideas:updated');
	}
}
