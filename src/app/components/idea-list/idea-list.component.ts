import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/models/idea';

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

}
