import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabArchivePage } from './tab_archive.page';
import { IdeaListComponent } from '../components/idea-list/idea-list.component';
import { IdeasFilterBarComponent } from '../components/ideas-filter-bar/ideas-filter-bar.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: TabArchivePage }])
	],
	declarations: [TabArchivePage, IdeaListComponent, IdeasFilterBarComponent]
})
export class TabArchivePageModule { }
