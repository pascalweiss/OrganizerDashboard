import { CardItem } from './card.item';
import { NotecontentComponent } from '../plugins/note/content/notecontent.component';
import { ChecklistcontentComponent } from '../plugins/checklist/content/checklistcontent.component';
import { NoteEditorComponent } from '../plugins/note/editor/noteeditor.component';
import { ChecklistEditorComponent } from '../plugins/checklist/editor/checklisteditor.component';

export const cardpreviews: CardItem[] = [
    new CardItem(
        NotecontentComponent,
        NoteEditorComponent,
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
        NotecontentComponent,
        NoteEditorComponent,
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
        NotecontentComponent,
        NoteEditorComponent,
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
        NotecontentComponent,
        NoteEditorComponent,
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
        NotecontentComponent,
        NoteEditorComponent,
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
        NotecontentComponent,
        NoteEditorComponent,
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
        ChecklistcontentComponent,
        ChecklistEditorComponent,
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
