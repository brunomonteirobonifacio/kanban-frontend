import { Component } from '@angular/core';
import { KanbanTaskCardComponent } from '../kanban-task-card/kanban-task-card.component';

@Component({
  selector: 'app-kanban-board',
  imports: [KanbanTaskCardComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {

}
