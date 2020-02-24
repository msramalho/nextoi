import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IdeaListComponent } from 'src/app/components/idea-list/idea-list.component';
import { IdeasFilterBarComponent } from 'src/app/components/ideas-filter-bar/ideas-filter-bar.component';



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
