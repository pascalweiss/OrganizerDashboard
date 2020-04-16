import { Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { Container } from '../container.component';
import { CardItemPosition } from 'src/app/shared/card.item';

@Component({
    selector: 'newcard-container',
    templateUrl: './newcard.container.component.html',
    styleUrls: ['../container.component.scss']
})
export class NewCardContainer extends Container {
    public position: CardItemPosition;

    constructor(
        public elementRef: ElementRef,
        public resolver: ComponentFactoryResolver) {
        super(elementRef, resolver);
    }

    addToOnInit() {
        this.position = {...this.cardItem.data.oldPosition};
    };

    dragEnded(event) {
        this.position = {...this.cardItem.data.oldPosition};
        this.cardItem.data.currentPosition = event.source.getFreeDragPosition();
        this.cardItem.dragSubject.next(this.cardItem);
    }
}
