import { OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Idea } from 'src/app/models/idea';
import { Router } from '@angular/router';

export class ActionSheetIdeaComponent implements OnInit {

	private actionSheetController: ActionSheetController = new ActionSheetController();

	constructor(private idea: Idea, private ideas: any) { }

	ngOnInit() { }

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'What to do with this idea?',
			buttons: [{
				text: 'Edit',
				icon: 'create',
				handler: () => {
					this.ideas.router.navigate(['/add-idea'], { queryParams: { id: this.idea.id } });
				}
			}, {
				text: this.idea.archived ? 'Unarchive' : 'Archive',
				icon: this.idea.archived ? 'arrow-dropup-circle' : 'arrow-dropdown-circle',
				handler: () => {
					this.ideas.archiveIdea(this.idea);
				}
			}, {
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					this.ideas.deleteIdea(this.idea);
				}
			}]
		});
		await actionSheet.present();
	}

}
