import { CardItem } from './card.item';
import { NotecardComponent } from '../cards/notecard/notecard.component';
import { ChecklistcardComponent } from '../cards/checklistcard/checklistcard.component';

export const cardpreviews: CardItem[] = [
    new CardItem(
        NotecardComponent,
        {
            title: "NoteCard Title",
            oldPosition: undefined,
            currentPosition: { x: 0, y: 0 },
            usage: "preview",
            additional: {
                text: "Add your note here"
            }
        }
    ),
    new CardItem(
        ChecklistcardComponent,
        {
            title: "Checklist Title",
            oldPosition: undefined,
            currentPosition: { x: 0, y: 0 },
            usage: "preview",
            additional: {
                list: [{
                    checked: true,
                    text: "do task a"
                }, {
                    checked: false,
                    text: "do task b"
                }, {
                    checked: false,
                    text: "do task c"
                }
                ]
            }
        }
    )
]

export const newcards: CardItem[] = [
    new CardItem(

        NotecardComponent,
        {
            title: "NoteCard Title",
            oldPosition: { x: -220, y: 0 },
            currentPosition: { x: -220, y: 0 },
            usage: 'preview',
            additional: {
                text: "Add your note here"
            }
        }
    ),
    new CardItem(
        ChecklistcardComponent,
        {
            title: "Checklist Title",
            oldPosition: { x: -220, y: 220 },
            currentPosition: { x: -220, y: 220 },
            usage: 'preview',
            additional: {
                list: [{
                    checked: true,
                    text: "do task a"
                }, {
                    checked: false,
                    text: "do task b"
                }, {
                    checked: false,
                    text: "do task c"
                }
                ]
            }
        }
    )
]

export const testcards: CardItem[] = [
    new CardItem(
        NotecardComponent,
        {
            title: "Note Card 1",
            oldPosition: undefined,
            currentPosition: { x: 67, y: 50 },
            usage: "card",
            additional: {
                text: "lorem ipsum dolor sit"
            }
        }
    ),
    new CardItem(
        NotecardComponent,
        {
            title: "Note Card 2",
            oldPosition: undefined,
            currentPosition: { x: 474, y: 39 },
            usage: "card",
            additional: {
                text: "mach mal dein finanzamt"
            }
        }
    ),
    new CardItem(
        ChecklistcardComponent,
        {
            title: "Checklist Card 2",
            oldPosition: undefined,
            currentPosition: { x: 207, y: 343 },
            usage: "card",
            additional: {
                list: [{
                    checked: true,
                    text: "do task a"
                }, {
                    checked: false,
                    text: "do task b"
                }, {
                    checked: false,
                    text: "do task c"
                }
                ]
            }
        }
    )
];
