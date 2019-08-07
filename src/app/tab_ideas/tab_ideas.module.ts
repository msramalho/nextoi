import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabIdeas as TabIdeas } from './tab_ideas.page';
import { IdeaListComponent } from '../components/idea-list/idea-list.component';
import { IdeaComponent } from '../components/idea/idea.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabIdeas }])
  ],
  declarations: [TabIdeas, IdeaListComponent, IdeaComponent]
})
export class TabIdeasModule {}
