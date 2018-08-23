import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <app-navbar></app-navbar>
  <app-eventslist></app-eventslist>`
})
export class EventsAppComponent {
  title = 'app';
}
