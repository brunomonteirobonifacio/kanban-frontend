import { CardStatus } from '../enums/card-status';

export type Card = {
  id: number;
  title: string;
  content: string;
  status: CardStatus;
}
