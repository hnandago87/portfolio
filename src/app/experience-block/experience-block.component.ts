import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-experience-block",
  templateUrl: "./experience-block.component.html",
  styleUrls: ["./experience-block.component.scss"],
})
export class ExperienceBlockComponent implements OnInit {
  @Output() org: EventEmitter<string> = new EventEmitter();
  selectedExperience = "CyberSoft";
  currentScrollIndex = 0;

  constructor() {}

  ngOnInit() {
    this.org.emit("CyberSoft");
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
