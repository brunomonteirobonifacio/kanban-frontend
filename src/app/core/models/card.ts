import {CardStatus} from './enums/card-status';

export class Card {
  id: number;
  title: string;
  content: string;
  status: CardStatus;

  constructor(id: number, title: string, content: string, status: CardStatus = CardStatus.PENDING) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.status = status;
  }
}
