import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabIdeasPage as TabIdeasPage } from './tab_ideas.page';
import { IdeaListComponent } from '../components/idea-list/idea-list.component';
import { IdeasFilterBarComponent } from '../components/ideas-filter-bar/ideas-filter-bar.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: TabIdeasPage }])
	],
	declarations: [TabIdeasPage, IdeaListComponent, IdeasFilterBarComponent]
})
export class TabIdeasPageModule { }
