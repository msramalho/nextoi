import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: ['./idea.component.scss'],
})
export class IdeaComponent implements OnInit {
    @Input() idea: Idea;

    constructor() { }

    ngOnInit() { }


    showActionSheet(idea: Idea): void {
        console.log(`deleted idea ${idea.title}`);
    }
}
