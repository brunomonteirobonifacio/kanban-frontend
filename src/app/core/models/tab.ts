import { ActionOnMove } from '../enums/action-on-move';
import { Card } from './card';

export type Tab = {
  id: number;
  name: string;
  color: string;
  cards: Card[];
  actionOnMove?: ActionOnMove | null;
}
