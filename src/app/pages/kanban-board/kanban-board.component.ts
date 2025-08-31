import { Component } from '@angular/core';
import { Tab } from '../../core/models/tab';
import { ActionOnMove } from '../../core/enums/action-on-move';
import { KanbanTaskCardComponent } from '../../kanban-task-card/kanban-task-card.component';
import { CardStatus } from '../../core/enums/card-status';

@Component({
  selector: 'app-kanban-board',
  imports: [KanbanTaskCardComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  tabs: Tab[] = [
    {
      id: 1,
      name: 'Unstarted',
      color: '#d6000020',
      cards: [
        { id: 1, title: 'Title', content: 'Content', status: CardStatus.PENDING }
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      color: '#00ffff20',
      cards: []
    },
    {
      id: 3,
      name: 'Completed',
      color: '#80ff0020',
      cards: [],
      actionOnMove: ActionOnMove.FINISH
    }
  ]
}
