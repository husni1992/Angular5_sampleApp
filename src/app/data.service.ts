import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private goals = new BehaviorSubject([
    "This inital goal",
    "Another silly goal"
  ]);
  goal = this.goals.asObservable();

  constructor() {}

  changeGoal = goal => {
    console.log('changeGoal', this.goals);
    this.goals.next(goal);
  };
}
