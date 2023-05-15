import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import Popper, { PopperOptions } from 'popper.js';
import { filter, fromEvent, merge, pluck } from 'rxjs';

@Directive({
  selector: '[appPopper]'
})
export class PopperDirective implements OnInit{

  @Input() target!: HTMLElement;
  @Input() placement?: string;
  @Input() appPopper?: HTMLElement;

  private popper!: Popper;

  private readonly defaultConfig: PopperOptions = {
    placement: "top",
    removeOnDestroy: true,
    modifiers: {
      arrow: {
        element: ".popper__arrow"
      }
    }
  };

  constructor(private readonly elReference: ElementRef, private renderer:Renderer2) {}

  ngOnInit(): void {
    const reference = this.appPopper ? this.appPopper : this.elReference.nativeElement;
    this.popper = new Popper(reference, this.target, this.defaultConfig);
    this.renderer.setStyle(this.target, "display", "none");
    merge(
      fromEvent(reference, "mouseenter"),
      fromEvent(reference, "mouseleave")
    ).pipe(
      filter(() => this.popper != null),
      pluck("type")
    ).subscribe((e: any) => this.mouseHoverHandler(e));
  }

  ngOnDestroy(): void {
    if (!this.popper) {
      return;
    }
    this.popper.destroy();
  }

  private mouseHoverHandler(e: string): void {
    if (e === "mouseenter") {
      this.renderer.removeStyle(this.target, "display");
      this.popper.enableEventListeners();
      this.popper.scheduleUpdate();
    } else {
      this.renderer.setStyle(this.target, "display", "none");
      this.popper.disableEventListeners();
    }
  }
  
}
