import { Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, ElementRef } from '@angular/core';
import { CardItem } from '../shared/card.item';
import { BaseContent } from '../contents/basecontent';

export abstract class Container implements OnInit {
    @Input() cardItem: CardItem;
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
    @Input('dragCard') component: BaseContent;
    @Input('dragDisabled')dragDisabled: Boolean;
    public isPreview = false;
    public containerStyle: any;
    private doubleTapIndicationTime: number;

    // this function can be used to do additional initialization
    abstract addToOnInit(): void;

    constructor(
        public elementRef: ElementRef,
        public resolver: ComponentFactoryResolver) { }
        
    ngOnInit() {
        setTimeout(() => {
            this.setComponentRef();
            this.addContent();
            this.setComponentStyle();
            this.addToOnInit();
        }, 0);
    }


    setComponentRef() {
        const factory = this.resolver.resolveComponentFactory(this.cardItem.component);
        const componentRef = this.container.createComponent(factory);
        this.component = (<BaseContent>componentRef.instance);
    }

    setComponentStyle() {
        this.containerStyle = this.component.cardStyle;
    }

    addContent() {
        this.component.cardItem = this.cardItem;
    }

    protected isDoubleTap() {
        const old = this.doubleTapIndicationTime;
        const now = Date.now();
        this.doubleTapIndicationTime = now;
        return (now - old) < 100;
    }
}
