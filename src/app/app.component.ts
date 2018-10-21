import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng5 Husny";
  inputVal: string;
  isTimerVisible: boolean = false;

  ngDoCheck() {
    console.log("ngOnChanges");
    if (this.inputVal === "showTimer") {
      this.isTimerVisible = true;
    } else {
      this.isTimerVisible = false;
    }
  }
}
