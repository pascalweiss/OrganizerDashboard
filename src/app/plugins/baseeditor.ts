import { CardItem } from 'src/app/shared/card.item';

export abstract class BaseEditor {
  public cardItem: CardItem;
  public static cardTypeName = 'Unknown Type';
}
