import { Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { Container } from '../container.component';

@Component({
  selector: 'preview-container',
  templateUrl: './preview.container.component.html',
  styleUrls: ['../container.component.scss', './preview.container.component.scss']
}) 
export class PreviewContainerComponent extends Container {
    private previewScaling = 0.5;
    
    constructor(
        public elementRef: ElementRef,
        public resolver: ComponentFactoryResolver) {
            super(elementRef, resolver);
    }

    addToOnInit() {
        Object.assign(this.containerStyle, {
            transform: "scale(" + this.previewScaling + ")"
        })
    }
}
