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
	private ready: Promise<any>;

	constructor(private events: Events, private storage: Storage) {
		this.ready = new Promise((resolve, _) => {
			this.storage.get('ideas').then(ideas => {
				if (ideas) { this.ideas = deserialize<Idea[]>(Idea, ideas); }
				events.subscribe('ideas:updated', (newIdeas) => {
					this.ideas = newIdeas;
					this.storage.set('ideas', serialize<Idea[]>(this.ideas));
				});
				resolve();
			});
		});
	}

	async getIdeas(): Promise<Idea[]> {
		return this.ready.then(() => this.ideas);
	}

	getIdea(id: string): Idea {
		return this.ideas.find(idea => idea.id === id);
	}

	addIdea(title: string, description: string, topics: {}) {
		this.ideas.push(new Idea(title, description, false, new Date(), topics));
		this.events.publish('ideas:updated', this.ideas);
	}

	editIdea(idea: Idea, title: string, description: string, topics: {}) {
		idea.title = title;
		idea.description = description;
		idea.topics = topics;
		this.events.publish('ideas:updated', this.ideas);
	}

}
