import { Component } from '@angular/core';
import { Tab } from '../core/models/tab';
import { ActionOnMove } from '../core/models/enums/action-on-move';
import { Card } from '../core/models/card';
import { KanbanTaskCardComponent } from '../kanban-task-card/kanban-task-card.component';

@Component({
  selector: 'app-kanban-board',
  imports: [KanbanTaskCardComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  tabs: Tab[] = [
    new Tab(1, 1, 'Unstarted', '#d6000020', [
      new Card(1, 'Title', 'Content'),
    ]),
    new Tab(2, 1, 'In Progress', '#00ffff20'),
    new Tab(3, 1, 'Completed', '#80ff0020', [], ActionOnMove.FINISH),
  ]
}
