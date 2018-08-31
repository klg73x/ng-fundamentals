import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
    selector: 'app-eventslist',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <app-eventthumbnail [event]="event"></app-eventthumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent {
    events: any[];

    constructor(private eventService: EventService) {
        this.events = this.eventService.getEvents();
    }
}
