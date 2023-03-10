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
  hero?: HeroModel;
  hero1?: any;
  team1?: any[];
  team2?: any[];
  teamSub?: any[];
  isTeam1Touched?: boolean;

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((data)=>{
      this.heroes = data;

      this.team1 = [
        this.heroes[0], this.heroes[1], this.heroes[2], this.heroes[3], this.heroes[4],
      ];

      this.team2 = [
        this.heroes[5], this.heroes[6], this.heroes[7], this.heroes[8], this.heroes[9],
      ];

      this.teamSub = [
        this.heroes[10], this.heroes[11], this.heroes[12], this.heroes[13], this.heroes[14],
      ];

  /*     
      this doesn't work
      for (let i = 0; i < 5; i ++){
          this.team1?.push(this.heroes[i])
      } 
  */

      console.log(this.team1);
    });

  }

  onDeleteHeroTeam1(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team1?.splice(index, 1);
    this.isTeam1Touched = true;
  }

  onDeleteHeroTeam2(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team2?.splice(index, 1);
  }
}
