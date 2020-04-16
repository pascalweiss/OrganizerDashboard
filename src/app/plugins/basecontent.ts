import { CardItem } from 'src/app/shared/card.item';

export abstract class BaseContent {
  public cardItem: CardItem;
  public static cardTypeName = 'Unknown Type';
  cardStyle = {};
}
