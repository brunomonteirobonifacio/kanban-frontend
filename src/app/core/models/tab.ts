import { ActionOnMove } from './enums/action-on-move';
import { Card } from './card';

export class Tab {
  // ACEITA NULL TEMPORARIAMENTE PRA FACILITAR OS TESTES
  id: number;
  userId: number | null;
  name: string;
  color: string;
  cards: Card[];
  actionOnMove: ActionOnMove | null;

  constructor(id: number, userId: number, name: string, color: string, cards: Card[] = [], actionOnMove: ActionOnMove | null = null) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.color = color;
    this.cards = cards;
    this.actionOnMove = actionOnMove;
  }
}
