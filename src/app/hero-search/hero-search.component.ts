import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete/typings";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.scss"]
})
export class HeroSearchComponent implements OnInit {
  options = ["One", "Two", "Three"];
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.router.navigate(["/detail", event.option.value.id]);
  }

  displayHero(hero: Hero) {
    return hero.name;
  }
}
