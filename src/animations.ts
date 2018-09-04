import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({opacity: 0})],
      {optional: true}
    ),
    query(
      ':leave',
      [style({opacity: 1}), animate('0.3s', style({opacity: 0}))],
      {optional: true}
    ),
    query(
      ':enter',
      [style({opacity: 0}), animate('0.3s', style({opacity: 1}))],
      {optional: true}
    )
  ])
]);

export const transformTopAnimation = trigger('transformTopAnimation',[
  transition('* => *', [
    query(
      ':enter',
      [style({transform: 'translateY(-100%)'})],
      {optional: true}
    ),
    query(
      ':leave',
      [style({transform: 'translateY(0)'}), animate('0.3s', style({transform: 'translateY(-100%)'}))],
      {optional: true}
    ),
    query(
      ':enter',
      [style({transform: 'translateY(-100%)'}), animate('0.3s', style({transform: 'translateY(0)'}))],
      {optional: true}
    )
  ])
]);
