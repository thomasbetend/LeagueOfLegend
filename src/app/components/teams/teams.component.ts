import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/typings';

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
  team2Sub?: any[];
  isTeam1Touched?: boolean;
  isTeam2Touched?: boolean;
  username: string = '';
  errorSelectHero1?: boolean;
  errorSelectHero2?: boolean;
  heroSelectForm: FormGroup;
  looseMessage?: boolean;

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
      this.team2Sub = [];

      for (let i = 0; i < 5; i ++){
          this.team1?.push(this.heroes[i])
      }

      for (let i = 5; i < 10; i ++){
        this.team2?.push(this.heroes[i])
      }

      for (let i = 10; i < 15; i ++){
        this.team1Sub?.push(this.heroes[i])
      }

      for (let i = 15; i < 20; i ++){
        this.team2Sub?.push(this.heroes[i])
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

  onKillHeroTeam1(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team1?.splice(index, 1);
    this.isTeam1Touched = true;

    if(!this.team1Sub) {
      this.isTeam1Touched = false;
      return;
    };

    if (this.team1Sub.length < 1) this.isTeam1Touched = false;

    if (!this.team1) return;
    if (this.team1.length < 1 && this.team1Sub.length < 1) this.looseMessage = true;
    console.log('looseMessage', this.looseMessage);

    localStorage.setItem('team1', JSON.stringify(this.team1));
    localStorage.setItem('team2', JSON.stringify(this.team2));
    localStorage.setItem('team1Sub', JSON.stringify(this.team1Sub));
    localStorage.setItem('team2Sub', JSON.stringify(this.team2Sub));
  }

  onKillHeroTeam2(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);
    this.team2?.splice(index, 1);
    this.isTeam2Touched = true;

    if(!this.team2Sub) {
      this.isTeam2Touched = false;
      return;
    };

    if (this.team2Sub.length < 1) this.isTeam2Touched = false;

    if (!this.team2) return;
    if (this.team2.length < 1 && this.team2Sub.length < 1) this.looseMessage = true;
    console.log('looseMessage', this.looseMessage);
  }

  addHeroOnTeam1() {
    if (!this.heroSelectForm.valid) {
      this.errorSelectHero1 = true;
      return;
    }

    console.log('hero', this.heroSelectForm.value);

    this.team1?.unshift(this.heroSelectForm.value["heroName"]);

    if (!this.team1Sub) return;
    this.team1Sub = this.deleteHeroFromSubTeam(this.heroSelectForm.value["heroName"].id, this.team1Sub);
    console.log('>>>>>team1Sub', this.team1Sub);

    if (!this.team1Sub[0]) this.isTeam1Touched = false;

    if (!this.team1) return;
    if (this.team1.length >= 5) this.isTeam1Touched = false;

    this.heroSelectForm.setValue({
      heroName: '',
    });
  }


  addHeroOnTeam2() {
    if (!this.heroSelectForm.valid) {
      this.errorSelectHero2 = true;
      return;
    }

    console.log('hero', this.heroSelectForm.value["heroName"]);

    this.team2?.unshift(this.heroSelectForm.value["heroName"]);

    if (!this.team2Sub) return;
    this.team2Sub = this.deleteHeroFromSubTeam(this.heroSelectForm.value["heroName"].id, this.team2Sub);
    console.log('>>>>>team2Sub', this.team2Sub);

    if (!this.team2) return;
    if (this.team2.length >= 5) this.isTeam2Touched = false;

    this.heroSelectForm.setValue({
      heroName: '',
    });


  }

  deleteHeroFromSubTeam(idHero: number, teamSub: Hero[]) {

    let newTeamSub = [];
    for (let i = 0; i < teamSub.length; i ++){
      if (teamSub[i].id !== idHero) {
        newTeamSub.push(teamSub[i]);
      }
    }
    return newTeamSub;
  }

}
