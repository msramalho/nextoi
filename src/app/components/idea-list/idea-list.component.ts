import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { ActionSheetIdeaComponent } from '../action-sheet-idea/action-sheet-idea.component';
import { Events } from '@ionic/angular';

@Component({
	selector: 'app-idea-list',
	templateUrl: './idea-list.component.html',
	styleUrls: ['./idea-list.component.scss'],
})
export class IdeaListComponent implements OnInit {

	private ideas: Idea[] = [
		new Idea('The main idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The oahd idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', false, [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The oahd idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', true, [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The second idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 5 }, { name: 'social status', value: 4 }]),
		new Idea('The third idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', false, [{ name: 'motivation', value: 3 }, { name: 'social status', value: 10 }]),
		new Idea('The third idea', 'batman Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 2 }, { name: 'social status', value: 2 }])
	];
	private visibleIdeas: Idea[] = this.ideas;
	filters: any = {
		score: { lower: 0, upper: 10 },
		text: '',
		sortBy: 0
	};

	constructor(public events: Events) { }

	@Input() showArchived: boolean;

	ngOnInit() {
		this.ideas = this.ideas.filter(i => i.archived === this.showArchived);
		this.visibleIdeas = this.ideas;
		this.events.subscribe('knobValues:updated', (knobValues: any) => {
			this.filters.score.lower = knobValues.lower;
			this.filters.score.upper = knobValues.upper;
			this.filter();
		});
	}

	// filter methods
	filter() {
		this.visibleIdeas = this.ideas.filter(i => {
			const score = i.getScore();
			return this.filters.score.lower <= score && score <= this.filters.score.upper;
		}).filter(i =>
			(i.title + ' ' + i.description).includes(this.filters.text)
		);
		// this.visibleIdeas.sort()
	}

	// idea actions
	deleteIdea(idea: Idea) {
		this.ideas = this.ideas.filter((i) => i !== idea);
		this.filter();
	}

	archiveIdea(idea: Idea) {
		idea.archived = !idea.archived;
		this.filter();
	}

	// others
	showActionSheet(idea: Idea): void {
		new ActionSheetIdeaComponent(idea, this).presentActionSheet();
	}
}
