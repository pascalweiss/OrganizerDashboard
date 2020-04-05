import { Component, Input, Output, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, ElementRef } from '@angular/core';
import { CardItem } from '../../shared/card.item';
import { CardComponent } from '../../cards/card/card.component';

@Component({
    selector: 'card-container',
    templateUrl: './card.container.component.html',
    styleUrls: ['../container.component.scss', './card.container.component.scss']
})
export class CardContainer implements OnInit {
    @Input() cardItem: CardItem;
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    @Input('dragCard') component: CardComponent;
    @Input('dragDisabled') dragDisabled: Boolean;
    public isPreview = false;
    private previewScaling = 0.5;
    public containerStyle: any;
    private doubleTapIndicationTime: number;

    constructor(
        public elementRef: ElementRef<any>,
        public resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.setComponentRef();
            this.addContent();
            this.setComponentStyle();
        }, 0);
    }

    setComponentRef() {
        const factory = this.resolver.resolveComponentFactory(this.cardItem.component);
        const componentRef = this.container.createComponent(factory);
        this.component = (<CardComponent>componentRef.instance);
    }

    setComponentStyle() {
        this.containerStyle = this.component.cardStyle;
    }

    addContent() {
        this.component.cardItem = this.cardItem;
    }

    dragEnded(event) {
        this.cardItem.data.position = event.source.getFreeDragPosition();
    }

    private isDoubleTap() {
        const old = this.doubleTapIndicationTime;
        const now = Date.now();
        this.doubleTapIndicationTime = now;
        return (now - old) < 100;
    }

    onTap() {
        if (this.isDoubleTap()) {
            this.elementRef.nativeElement.firstChild.style.background = "green";
            console.log("tap");
        }
    }

    onDoubleClick() {
        if (this.isDoubleTap()) {
            this.elementRef.nativeElement.firstChild.style.background = "green";
            console.log("click");
        }
    }
}
