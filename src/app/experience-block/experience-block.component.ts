import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-experience-block",
  templateUrl: "./experience-block.component.html",
  styleUrls: ["./experience-block.component.scss"],
})
export class ExperienceBlockComponent implements OnInit {
  @Output() org: EventEmitter<string> = new EventEmitter();
  selectedExperience = "CapitalOne";
  currentScrollIndex = 0;

  constructor() {}

  ngOnInit() {
    this.org.emit("CapitalOne");
  }

  selectExperience(selectedExperience: string) {
    this.org.emit(selectedExperience);
    this.selectedExperience = selectedExperience;
  }

  arrowClick(direction: "forward" | "reverse") {
    const numberOfElements = document.getElementsByClassName(
      "experience-block"
    );
    if (direction === "forward") {
      if (numberOfElements.length - this.currentScrollIndex > 0) {
        if (numberOfElements.length - this.currentScrollIndex > 2) {
          numberOfElements[this.currentScrollIndex + 3].scrollIntoView({
            behavior: "smooth",
          });
          this.currentScrollIndex += 3;
        } else {
          numberOfElements[numberOfElements.length - 1].scrollIntoView({
            behavior: "smooth",
          });
          this.currentScrollIndex = numberOfElements.length;
        }
      }
    } else {
      numberOfElements[
        0
      ].scrollIntoView({ behavior: "smooth" });
      this.currentScrollIndex = 0;
    }
  }
}
