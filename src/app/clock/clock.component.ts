import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "clock-component",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"]
})
export class ClockComponent implements OnInit {
  @Input() time: any;
  @Output() pauseResumeTime = new EventEmitter<boolean>();
  timerRunning: boolean = true;

  constructor() {}

  ngOnInit() {}

  adjustTime = () => {
    this.timerRunning = this.timerRunning === true ? false : true;
    console.log('newVal',this.timerRunning)
    this.pauseResumeTime.emit(this.timerRunning);
  }
}
