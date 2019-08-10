import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { ActionSheetIdeaComponent } from '../action-sheet-idea/action-sheet-idea.component';
import { Events } from '@ionic/angular';
import { IdeasService } from 'src/app/services/ideas.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-idea-list',
	templateUrl: './idea-list.component.html',
	styleUrls: ['./idea-list.component.scss'],
})
export class IdeaListComponent implements OnInit {
	private filters: any = {
		score: { lower: 0, upper: 10 },
		text: '',
		sortBy: 'newest'
	};
	private ideas: Idea[];
	private visibleIdeas: Idea[] = [];

	constructor(public events: Events, public ideasService: IdeasService, public router: Router) { }


	@Input() showArchived: boolean;

	ngOnInit() {
		this.ideasService.getIdeas().then(ideas => {
			this.ideas = ideas;
			console.log(this.ideas);
			this.display();
			this.events.subscribe('knobValues:updated', (knobValues: any) => {
				this.filters.score.lower = knobValues.lower;
				this.filters.score.upper = knobValues.upper;
				this.display();
			});
			this.events.subscribe('searchBar:updated', (searchBar: string) => {
				this.filters.text = searchBar;
				this.display();
			});
			this.events.subscribe('sortBy:updated', (sortBy: string) => {
				this.filters.sortBy = sortBy;
				this.display();
			});
			this.events.subscribe('ideas:updated', (newIdeas) => {
				this.ideas = newIdeas; this.display();
			});
		});
	}

	display() {
		this.visibleIdeas = this.ideas.filter(
			i => i.archived === this.showArchived
		).filter(i => {
			const score = i.getScore();
			return this.filters.score.lower <= score && score <= this.filters.score.upper;
		}).filter(i =>
			(i.title + ' ' + i.description).includes(this.filters.text.trim())
		).sort((a, b) => {
			switch (this.filters.sortBy) {
				case 'newest': return a.date > b.date ? -1 : 1;
				case 'oldest': return a.date <= b.date ? -1 : 1;
				case 'best': return a.getScore() > b.getScore() ? -1 : 1;
				case 'worst': return a.getScore() <= b.getScore() ? -1 : 1;
				default: return 0;
			}
		});
	}

	deleteIdea(idea: Idea) {
		this.ideas = this.ideas.filter(i => i !== idea);
		this.events.publish('ideas:updated', this.ideas);
	}

	archiveIdea(idea: Idea) {
		idea.archived = !idea.archived;
		this.events.publish('ideas:updated', this.ideas);
	}

	showActionSheet(idea: Idea, id: string): void {
		new ActionSheetIdeaComponent(idea, this).presentActionSheet();
	}
}
