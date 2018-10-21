import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = "Add Item";
  goalText: string;
  goals = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.goal.subscribe(res => (this.goals = res));
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  addItem = () => {
    if (!this.goalText) return;
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  };

  removeItem = index => {
    this.goals.splice(index, 1);
    this._data.changeGoal(this.goals);
  };

  incrementCount = _ => {
    this.itemCount++;
  };
}
