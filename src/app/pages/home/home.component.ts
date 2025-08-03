import { Component } from '@angular/core';
import { KanbanBoardComponent } from '../../kanban-board/kanban-board.component';

@Component({
  selector: 'app-home',
  imports: [KanbanBoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
