import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {

  @Input() currentPeople: any;
  @Input() last: boolean = false;

  @Output() skipEvent = new EventEmitter()
  @Output() likeEvent = new EventEmitter()

  public skip() {
    this.skipEvent.emit(this.currentPeople);
  }

  public like() {
    this.likeEvent.emit(this.currentPeople);
  }
}
