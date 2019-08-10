import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Idea } from '../models/idea';
import { IdeasService } from '../services/ideas.service';

@Component({
	selector: 'app-add-idea',
	templateUrl: './add-idea.page.html',
	styleUrls: ['./add-idea.page.scss'],
})
export class AddIdeaPage implements OnInit {
	form: FormGroup;
	topics: string[] = Idea.getScoreTopics();

	constructor(private router: Router, public formBuilder: FormBuilder, public ideasService: IdeasService) { }

	ngOnInit() {
		const formInputs: { [k: string]: any } = {
			title: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
			topics: new FormGroup({})
		};
		// add inputs dynamically
		this.topics.forEach(topic => {
			formInputs.topics.addControl(topic, new FormControl(5, [Validators.min(0), Validators.max(10), Validators.required]));
		});
		this.form = this.formBuilder.group(formInputs);
		console.log(this.form);
	}

	addIdea(value) {
		this.ideasService.addIdea(value.title, value.description);
		// this.form.reset();
		this.goBack();
	}

	goBack() {
		this.router.navigate(['/tabs/tab_ideas']);
	}
}
