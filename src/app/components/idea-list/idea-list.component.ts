import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { ActionSheetIdeaComponent } from '../action-sheet-idea/action-sheet-idea.component';

@Component({
	selector: 'app-idea-list',
	templateUrl: './idea-list.component.html',
	styleUrls: ['./idea-list.component.scss'],
})
export class IdeaListComponent implements OnInit {

	ideas: Idea[] = [
		new Idea('The main idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The oahd idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', true, [{ name: 'motivation', value: 6 }, { name: 'social status', value: 8 }]),
		new Idea('The second idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 5 }, { name: 'social status', value: 4 }]),
		new Idea('The third idea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius vestibulum nunc et euismod. In non ante mauris. Proin et nisi eu dui consequat sagittis et ut turpis. ', true, [{ name: 'motivation', value: 3 }, { name: 'social status', value: 10 }]),
	];

	constructor() { }

	ngOnInit() { }

	deleteIdea(idea: Idea) {
		this.ideas = this.ideas.filter((i) => i !== idea);
	}

	archiveIdea(idea: Idea) {
		idea.archived = !idea.archived;
	}

	showActionSheet(idea: Idea): void {
		console.log(`deleted idea ${idea.title}`);
		new ActionSheetIdeaComponent(idea, this).presentActionSheet();
	}
}
