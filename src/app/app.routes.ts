import { Routes } from '@angular/router';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';
import { DetailCharacterComponent } from './pages/rickandmorty/detail-character/detail-character.component';

export const routes: Routes = [
  { path: 'rickandmorty', component: RickandmortyComponent },
  {
    path: 'rickandmorty/detail-character/:id',
    component: DetailCharacterComponent,
  },
];
