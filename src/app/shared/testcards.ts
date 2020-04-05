import { CardItem } from './card.item';
import { Component } from '@angular/core';
import { NotecardComponent } from '../cards/notecard/notecard.component';
import { ChecklistcardComponent } from '../cards/checklistcard/checklistcard.component';

export const cardpreviews: CardItem[] = [
    {
        component: NotecardComponent,
        data: {
            title: "NoteCard Title",
            position: { x: 0, y: 0 },
            usage: "preview",
            additional: {
                text: "Add your note here"
            }
        }
    }, {
        component: ChecklistcardComponent,
        data: {
            title: "Checklist Title",
            position: { x: 0, y: 0 },
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
    }
]

export const newcards: CardItem[] = [
    {
        component: NotecardComponent,
        data: {
            title: "NoteCard Title",
            position: { x: -220, y: 0 },
            usage: 'preview',
            additional: {
                text: "Add your note here"
            }
        }
    }, {
        component: ChecklistcardComponent,
        data: {
            title: "Checklist Title",
            position: { x: -220, y: 220 },
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
    }
]

export const testcards: CardItem[] = [
    {
        component: NotecardComponent,
        data: {
            title: "Note Card 1",
            position: {
                x: 67,
                y: 50
            },
            usage: "card",
            additional: {
                text: "lorem ipsum dolor sit"
            }
        }
    }, {
        component: NotecardComponent,
        data: {
            title: "Note Card 2",
            position: {
                x: 474,
                y: 39
            },
            usage: "card",
            additional: {
                text: "mach mal dein finanzamt"
            }
        }
    }, {
        component: ChecklistcardComponent,
        data: {
            title: "Checklist Card 2",
            position: {
                x: 207,
                y: 343
            },
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
    }
];
