import { Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { Container } from '../container.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { CardItem } from 'src/app/shared/card.item';

@Component({
    selector: 'card-container',
    templateUrl: './card.container.component.html',
    styleUrls: ['../container.component.scss', './card.container.component.scss']
})
export class CardContainer extends Container {
    private n = 0;
    constructor(
        public elementRef: ElementRef,
        public resolver: ComponentFactoryResolver) {
        super(elementRef, resolver);
    }

    addToOnInit() {
    };

    dragEnded(event) {
        this.cardItem.data.position = event.source.getFreeDragPosition();
        console.log(this.cardItem.data.position);
    }

    onTap() {
        if(this.isDoubleTap()) {
        this.elementRef.nativeElement.firstChild.style.background = "green";
        console.log("tap");
        }
    }

    onDoubleClick() {
        if(this.isDoubleTap()) {
        this.elementRef.nativeElement.firstChild.style.background = "green";
        console.log("click");
        }
    }
}
