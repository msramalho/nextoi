import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab_ideas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab_ideas/tab_ideas.module').then(m => m.TabIdeasPageModule)
          }
        ]
      },
      {
        path: 'tab_archive',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab_archive/tab_archive.module').then(m => m.TabArchivePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab_ideas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab_ideas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
