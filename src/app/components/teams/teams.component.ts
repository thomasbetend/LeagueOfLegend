import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  heroes?: any;
  hero?: HeroModel;
  hero1?: any;
  team1?: any[];
  team2?: any[];
  team1Sub?: any[];
  isTeam1Touched?: boolean;
  isTeam2Touched?: boolean;
  username: string = '';
  errorSelectHero1?: boolean;
  errorSelectHero2?: boolean;
  heroSelectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private heroesService: HeroesService) {
    this.heroSelectForm = this.formBuilder.group({
      heroName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((data)=>{
      this.heroes = data;
      this.team1 = [];
      this.team2 = [];
      this.team1Sub = [];

      for (let i = 0; i < 5; i ++){
          this.team1?.push(this.heroes[i])
      }

      for (let i = 5; i < 10; i ++){
        this.team2?.push(this.heroes[i])
      }

      for (let i = 10; i < 15; i ++){
        this.team1Sub?.push(this.heroes[i])
      }

      console.log(this.team1);

    });
  }

  changeHero(e: any) {
    this.heroName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get heroName() {
    return this.heroSelectForm.get('heroName');
  }

  onDeleteHeroTeam1(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team1?.splice(index, 1);
    this.isTeam1Touched = true;
  }

  onDeleteHeroTeam2(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team2?.splice(index, 1);
    this.isTeam2Touched = true;
  }

  addHeroOnTeam1() {
    if (!this.heroSelectForm.valid) {
      this.errorSelectHero1 = true;
      return;}

    this.team1?.unshift(this.heroSelectForm.value["heroName"]);
    if (!this.team1) return;
    if (this.team1.length >= 5) this.isTeam1Touched = false;
  }


  addHeroOnTeam2() {
    if (!this.heroSelectForm.valid) {
      this.errorSelectHero2 = true;
      return;}

    this.team2?.unshift(this.heroSelectForm.value["heroName"]);
    if (!this.team2) return;
    if (this.team2.length >= 5) this.isTeam2Touched = false;
  }
}
