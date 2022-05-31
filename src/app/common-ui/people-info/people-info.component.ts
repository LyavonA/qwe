import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})
export class PeopleInfoComponent implements OnInit {

  @Input() peopleInfo: any;
  @Input() showOtherInfo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
