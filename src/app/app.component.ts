import { Component, OnInit } from '@angular/core';
import { HeroModel } from './models/hero.model';
import { HeroesService } from './services/heroes.service';
import { Hero } from './typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LeagueOfLegends-TestCFM';
  heroes?: any;
  heroesList?: any[];
  array?: [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((data)=>{
      this.heroes = data;
      console.log((this.heroes));
      this.heroesList = Object.keys(this.heroes);
    });

    
  }
}
