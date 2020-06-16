import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FilmsComponent } from './films/films.component';


const routes = [
  { path: 'films', component: FilmsComponent},
  // { path: 'characters', component: TabsComponent, children: [
  //   { path: '', redirectTo: 'all', pathMatch: 'full' },
  //   { path: ':side', component: ListComponent }
  // ] },
  // { path: 'new-character', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule' },
  // { path: 'new-character', loadChildren: () => import('src/app/create-character/create-character.module').then(m => m.CreateCharacterModule) },
  // { path: '**', redirectTo: '/characters' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}
