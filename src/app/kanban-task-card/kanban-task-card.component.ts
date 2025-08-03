import {Component, Input } from '@angular/core';
import { Card } from '../core/models/card';

@Component({
  selector: 'app-kanban-task-card',
  imports: [],
  templateUrl: './kanban-task-card.component.html',
  styleUrl: './kanban-task-card.component.css'
})
export class KanbanTaskCardComponent {
  @Input() card: Card | undefined;
}
