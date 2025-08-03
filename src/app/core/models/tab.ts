import { ActionOnMove } from './enums/action-on-move';
import { Card } from './card';

export class Tab {
  id: number;
  userId: number;
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
