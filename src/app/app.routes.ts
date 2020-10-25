import { Routes } from "@angular/router";
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  keyframes,
} from "@angular/animations";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", data: {state: 'Home'} },
  { path: "home", component: HomeComponent, data: {state: 'Home'}},
  { path: "about", component: AboutComponent, data: {state: 'About'} },
];

export const routeTransitions = trigger("routeAnimations", [
  transition("* => *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("4.5s ease-in", style({ transform: "translateX(0)" })),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          animate("4s", keyframes([
            style({ transform: 'translateX(0)', opacity: 0.7, offset: 0.1 }),
            style({ transform: 'translateX(-400px)', opacity: 0.3, offset: 0.25 }),
            style({ transform: 'translateX(-800px)', opacity: 0.1, offset: 0.5 }),
            style({transform: 'translateX(-1100px)', opacity: 0, offset: 1 })
          ])),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
