import { Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { Container } from '../container.component';
import { CardItemPosition } from 'src/app/shared/card.item';


@Component({
    selector: 'card-container',
    templateUrl: './card.container.component.html',
    styleUrls: ['../container.component.scss', './card.container.component.scss']
})
export class CardContainer extends Container {
    
    constructor(
        public elementRef: ElementRef,
        public resolver: ComponentFactoryResolver) {
        super(elementRef, resolver);
    }

    addToOnInit() {
    };

    dragEnded(event) {
        
        
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
