import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-experience-block",
  templateUrl: "./experience-block.component.html",
  styleUrls: ["./experience-block.component.scss"],
})
export class ExperienceBlockComponent implements OnInit {
  @Output() org: EventEmitter<string> = new EventEmitter();
  selectedExperience = "CalAmp";
  currentScrollIndex = 0;

  constructor() {}

  ngOnInit() {
    this.org.emit("CalAmp");
  }

  selectExperience(selectedExperience: string) {
    this.org.emit(selectedExperience);
    this.selectedExperience = selectedExperience;
  }

  experienceChange(event) {
    this.org.emit(event.target.value);
    this.selectedExperience = event.target.value;
  }
}
