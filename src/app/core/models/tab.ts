import { ActionOnMove } from './enums/action-on-move';

export class Tab {
  // ACEITA NULL TEMPORARIAMENTE PRA FACILITAR OS TESTES
  id: number;
  userId: number | null;
  name: string;
  color: string;
  actionOnMove: ActionOnMove | null;

  constructor(id: number, userId: number | null, name: string, color: string, actionOnMove: ActionOnMove | null) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.color = color;
    this.actionOnMove = actionOnMove;
  }
}
