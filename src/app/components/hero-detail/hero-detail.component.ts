import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/typings';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  id?: number;
  name?: string;
  hero?: any;
  heroDetail?: Hero;
  heroes?: any;
  imageUrl = '../../assets/images/';

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((data)=>{
      this.heroes = data;

      if (!this.heroes) return;
      this.hero = [];
      for (let i = 0; i < this.heroes.length; i++) {
        if (this.heroes[i].name === this.name) this.hero.push(this.heroes[i]);
      }

      this.heroDetail = this.hero[0];

      console.log('>>>', this.heroDetail);

    });

  }
}
