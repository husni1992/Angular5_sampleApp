import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-change-detection",
  templateUrl: "./change-detection.component.html",
  styleUrls: ["./change-detection.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  @Input()
  text: { a: any; b: any };
  timerEvent: any;

  time = new Observable<string>((obs: Observer<string>) => {
    this.timerEvent = setInterval(() => {
      console.log('TimerUpdated')
      obs.next(new Date().toString());
    }, 1000);
  });

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    clearInterval(this.timerEvent);
  }
}
