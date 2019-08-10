import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabIdeas as TabIdeas } from './tab_ideas.page';
import { IdeaListComponent } from '../components/idea-list/idea-list.component';
import { ScoreRangeComponent } from '../components/score-range/score-range.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: TabIdeas }])
	],
	declarations: [TabIdeas, IdeaListComponent, ScoreRangeComponent]
})
export class TabIdeasModule { }
