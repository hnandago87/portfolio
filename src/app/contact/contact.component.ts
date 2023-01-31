import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm;

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      emailId: new FormControl("", Validators.compose([Validators.required])),
      comments: new FormControl(""),
    });
  }

  onSubmit(data) { }

  preventDefault(event: Event): void {
    event.preventDefault();
  }

  cancel(event) {
    event.preventDefault();
    this.initializeForm();
  }
}
