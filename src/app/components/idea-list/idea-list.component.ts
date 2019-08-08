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
        {
            title: 'The main idea',
            archived: true
        }, {
            title: 'The other idea',
            archived: false
        }, {
            title: 'The final idea',
            archived: true
        },
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
