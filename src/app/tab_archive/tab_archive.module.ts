import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabArchivePage } from './tab_archive.page';
import { IdeasListBarModule } from '../shared_modules/ideas-list-bar/ideas-list-bar.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: TabArchivePage }]),
		IdeasListBarModule
	],
	declarations: [TabArchivePage]
})
export class TabArchivePageModule { }
