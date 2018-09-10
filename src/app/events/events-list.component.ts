import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

declare let toastr;
@Component({
    // selector: 'app-eventslist', --This is no longer needed because we added routing
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <app-eventthumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-eventthumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private toastrService: ToastrService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
       this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.error(eventName, 'You messed up!');
    }
}
