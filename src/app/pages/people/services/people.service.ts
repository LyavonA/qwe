import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import peoples from './peoples.json';

@Injectable({providedIn: 'root'})
export class PeopleService {

  public getPeoplesByParams(params: any): Observable<any[]> {
    const peoplesData = (<any[]>JSON.parse(JSON.stringify(peoples)));
    return of(this.filterPeoplesByParams(peoplesData, params));
  }

  private filterPeoplesByParams(peoplesData: any, params: any): any[] {
    return peoplesData.peoples.filter((people: any) => {
      return people.distance <= params.distance &&
      people.personality.age <= params.age &&
      Number(params.gender) === 0 ? true : people.personality.gender === Number(params.gender)
    })
  }
}
