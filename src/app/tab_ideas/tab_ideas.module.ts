import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabIdeasPage as TabIdeasPage } from './tab_ideas.page';
import { IdeasListBarModule } from '../ideas-list-bar/ideas-list-bar.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: TabIdeasPage }]),
		IdeasListBarModule
	],
	declarations: [TabIdeasPage]
})
export class TabIdeasPageModule { }
