import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaListComponent } from '../components/idea-list/idea-list.component';
import { IdeasFilterBarComponent } from '../components/ideas-filter-bar/ideas-filter-bar.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
	declarations: [
		IdeaListComponent,
		IdeasFilterBarComponent
	],
	imports: [
		IonicModule,
		CommonModule,
		FormsModule
	],
	exports: [
		IdeaListComponent,
		IdeasFilterBarComponent
	]
})
export class IdeasListBarModule { }
