import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'board',
    component: KanbanBoardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
