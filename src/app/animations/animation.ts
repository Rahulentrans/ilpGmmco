import { animate, state, style, transition, trigger } from "@angular/animations";

export const slidingAnimation = trigger('slidingAnimation', 
    [
      state('in', 
        style({ left: '{{ leftPos }}'}),
        { params: { leftPos: '0vw', duration: '0ms'}}
      ),
      transition('* => in',animate('{{duration}}'))
    ]
  );