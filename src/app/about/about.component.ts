import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  goals = [];
  data1: string = "Test data1";
  currentTime: Object = new Date();
  timerLoop: any;
  timerRunning: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.updateCurrentTime();
    this._data.goal.subscribe(res => {
      console.log("Listening", this.goals);
      this.goals = res;
    });
  }

  updateCurrentTime = () => {
    this.timerLoop = setInterval(() => {
      if (this.timerRunning === true) {
        this.currentTime = new Date();
      }
    }, 1000);
  };

  adjustedFromClock = event => {
    console.log(event);
    this.timerRunning = event;
    // clearInterval(this.timerLoop);
  };

  sendMeHome = () => {
    this.router.navigate([""]);
  };
}
