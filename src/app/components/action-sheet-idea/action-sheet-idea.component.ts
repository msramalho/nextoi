import { OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Idea } from 'src/app/models/idea';
import { IdeaListComponent } from '../idea-list/idea-list.component';

export class ActionSheetIdeaComponent implements OnInit {

	private actionSheetController: ActionSheetController = new ActionSheetController();
	private idea: Idea;
	private ideaListComponent: IdeaListComponent;

	constructor(idea: Idea, ideas: IdeaListComponent) {
		this.idea = idea;
		this.ideaListComponent = ideas;
	}

	ngOnInit() { }

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'What to do with this idea?',
			buttons: [{
				text: 'Edit',
				icon: 'create',
				handler: () => {
					console.log('Edit clicked');
				}
			}, {
				text: 'Share',
				icon: 'share',
				handler: () => {
					console.log('Share clicked');
				}
			}, {
				text: 'Archive',
				icon: 'archive',
				handler: () => {
					this.ideaListComponent.archiveIdea(this.idea);
				}
			}, {
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					this.ideaListComponent.deleteIdea(this.idea);
				}
			}]
		});
		await actionSheet.present();
	}

}
