import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'board',
    component: KanbanBoardComponent
  }
];
