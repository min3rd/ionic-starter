import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';

@Directive({
  selector: '[long-press]',
  standalone: true,
})
export class LongPressDirective implements AfterViewInit {
  @Output() press = new EventEmitter();
  @Input('delay') delay: number = 500;
  action: any;
  private _activated = false;
  private gesture!: Gesture;
  constructor(
    private el: ElementRef,
    private gestureCtrl: GestureController,
    private zone: NgZone,
  ) { }
  ngAfterViewInit(): void {
    this.gesture = this.gestureCtrl.create({
      el: this.el.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: () => {
        this._activated = true;      
        this.longPressAction();
      },
      onEnd: () => {
        this._activated = false;
      }
    });
    this.gesture.enable(true);
  }
  private longPressAction() {
    if (this.action) {
      clearInterval(this.action);
    }
    this.action = setTimeout(() => {
      this.zone.run(() => {
        if (this._activated === true) {
          this._activated = false;
          this.press.emit();
        }
      });
    }, this.delay);
  }
}
