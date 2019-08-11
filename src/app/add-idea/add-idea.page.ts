import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Idea } from '../models/idea';
import { IdeasService } from '../services/ideas.service';
import {Location} from '@angular/common';

@Component({
	selector: 'app-add-idea',
	templateUrl: './add-idea.page.html',
	styleUrls: ['./add-idea.page.scss'],
})
export class AddIdeaPage implements OnInit {
	form: FormGroup;
	topics: string[] = Idea.getScoreTopics();
	idea: Idea = new Idea('', '', false, new Date(), {});
	id: any;
	constructor(public formBuilder: FormBuilder, public ideasService: IdeasService, private route: ActivatedRoute, private location: Location) { }

	ngOnInit() {
		this.id = this.route.snapshot.queryParamMap.get('id');
		if (this.id) { this.idea = this.ideasService.getIdea(this.id); }
		const formInputs: { [k: string]: any } = {
			title: new FormControl(this.idea.title, Validators.required),
			description: new FormControl(this.idea.description, Validators.required),
			topics: new FormGroup({})
		};
		// add inputs dynamically
		this.topics.forEach(topic => {
			let value = 5;
			if (topic in this.idea.topics) { value = this.idea.topics[topic]; }
			formInputs.topics.addControl(topic, new FormControl(value, [Validators.min(0), Validators.max(10), Validators.required]));
		});
		this.form = this.formBuilder.group(formInputs);
	}

	addIdea(value) {
		if (this.id) {
			this.ideasService.editIdea(this.idea, value.title, value.description, value.topics);
		} else {
			this.ideasService.addIdea(value.title, value.description, value.topics);
		}
		this.location.back();
	}

}
