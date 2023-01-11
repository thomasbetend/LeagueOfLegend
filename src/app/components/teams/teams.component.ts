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
  looseMessageTeam1?: boolean;
  looseMessageTeam2?: boolean;
  noMoreSubsTeam1?: boolean;
  noMoreSubsTeam2?: boolean;

  constructor(private formBuilder: FormBuilder, private heroesService: HeroesService) {
    this.heroSelectForm = this.formBuilder.group({
      heroName: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    if (localStorage.getItem('team1')) {
      this.getStorageTeam1();
      this.getStorageTeam2();
      return;
    }

    this.getHeroesAndSetGame();
  }

  getHeroesAndSetGame() {
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

      this.errorSelectHero1 = false;
      this.errorSelectHero2 = false;
      this.isTeam1Touched = false;
      this.isTeam2Touched = false;
      this.noMoreSubsTeam1 = false;
      this.noMoreSubsTeam2 = false;
      this.looseMessageTeam1 = false;
      this.looseMessageTeam2 = false;

      this.setStorageTeam1();
      this.setStorageTeam2();
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

  /* Using storage will enable to click on the image of a hero, to see the detail of this hero
    and then to get back to the game without loosing the state of the game */

  setStorageTeam1() {
    localStorage.setItem('errorSelectHero1', JSON.stringify(this.errorSelectHero1));
    localStorage.setItem('isTeam1Touched', JSON.stringify(this.isTeam1Touched));
    localStorage.setItem('team1', JSON.stringify(this.team1));
    localStorage.setItem('team1Sub', JSON.stringify(this.team1Sub));
    localStorage.setItem('noMoreSubsTeam1', JSON.stringify(this.noMoreSubsTeam1));
    localStorage.setItem('looseMessageTeam1', JSON.stringify(this.looseMessageTeam1));
  }

  setStorageTeam2() {
    localStorage.setItem('errorSelectHero2', JSON.stringify(this.errorSelectHero1));
    localStorage.setItem('isTeam2Touched', JSON.stringify(this.isTeam1Touched));
    localStorage.setItem('team2', JSON.stringify(this.team2));
    localStorage.setItem('team2Sub', JSON.stringify(this.team2Sub));
    localStorage.setItem('noMoreSubsTeam2', JSON.stringify(this.noMoreSubsTeam2));
    localStorage.setItem('looseMessageTeam2', JSON.stringify(this.looseMessageTeam2));
  }

  getStorageTeam1() {
    this.team1 = JSON.parse(localStorage.getItem('team1')!);
    this.team1Sub = JSON.parse(localStorage.getItem('team1Sub')!);
    this.errorSelectHero1 = JSON.parse(localStorage.getItem('errorSelectHero1')!);
    this.isTeam1Touched = JSON.parse(localStorage.getItem('isTeam1Touched')!);
    this.noMoreSubsTeam1 = JSON.parse(localStorage.getItem('noMoreSubsTeam1')!);;
    this.looseMessageTeam1 = JSON.parse(localStorage.getItem('looseMessageTeam1')!);
  }

  getStorageTeam2() {
    this.team2 = JSON.parse(localStorage.getItem('team2')!);
    this.team2Sub = JSON.parse(localStorage.getItem('team2Sub')!);
    this.errorSelectHero2 = JSON.parse(localStorage.getItem('errorSelectHero2')!);
    this.isTeam2Touched = JSON.parse(localStorage.getItem('isTeam2Touched')!);
    this.noMoreSubsTeam2 = JSON.parse(localStorage.getItem('noMoreSubsTeam2')!);
    this.looseMessageTeam2 = JSON.parse(localStorage.getItem('looseMessageTeam2')!);
  }

  onKillHeroTeam1(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);

    if (localStorage.getItem('team1')) {
      this.getStorageTeam1();
    } 

    this.team1?.splice(index, 1);
    this.isTeam1Touched = true;

    if(!this.team1Sub) {
      this.isTeam1Touched = false;
      return;
    };

    if (this.team1Sub.length < 1) {
      this.isTeam1Touched = false;
      this.noMoreSubsTeam1 = true;
    };

    if (!this.team1) return;
    if (this.team1.length < 1 && this.team1Sub.length < 1) this.looseMessageTeam1 = true;

    this.setStorageTeam1();
  }

  onKillHeroTeam2(name: any, index: number) {
    console.log(`Deleting hero : ${name}`);

    if (localStorage.getItem('team2')) {
      this.getStorageTeam2();
    } 

    this.team2?.splice(index, 1);
    this.isTeam2Touched = true;

    if(!this.team2Sub) {
      this.isTeam2Touched = false;
      return;
    };

    if (this.team2Sub.length < 1) {
      this.isTeam2Touched = false;
      this.noMoreSubsTeam2 = true;
    };

    if (!this.team2) return;
    if (this.team2.length < 1 && this.team2Sub.length < 1) this.looseMessageTeam2 = true;

    this.setStorageTeam2();
  }

  addHeroOnTeam1() {

    if (localStorage.getItem('team1')) {
      this.getStorageTeam1();
    } 

    if (!this.heroSelectForm.valid) {
      this.errorSelectHero1 = true;
      return;
    }

    console.log('hero', this.heroSelectForm.value);

    this.team1?.unshift(this.heroSelectForm.value["heroName"]);

    if (!this.team1Sub) return;
    this.team1Sub = this.deleteHeroFromSubTeam(this.heroSelectForm.value["heroName"].id, this.team1Sub);

    if (this.team1Sub.length < 1) {
      this.isTeam1Touched = false;
      this.noMoreSubsTeam1 = true;
    };

    if (!this.team1) return;
    if (this.team1.length >= 5) this.isTeam1Touched = false;

    this.heroSelectForm.setValue({
      heroName: '',
    });

    console.log('>>>>touched1', this.isTeam2Touched);

    this.setStorageTeam1();
  }

  addHeroOnTeam2() {

    if (localStorage.getItem('team2')) {
      this.getStorageTeam2();
    } 

    if (!this.heroSelectForm.valid) {
      this.errorSelectHero2 = true;
      return;
    }

    console.log('hero', this.heroSelectForm.value["heroName"]);

    this.team2?.unshift(this.heroSelectForm.value["heroName"]);

    if (!this.team2Sub) return;
    this.team2Sub = this.deleteHeroFromSubTeam(this.heroSelectForm.value["heroName"].id, this.team2Sub);

    if (this.team2Sub.length < 1) {
      this.isTeam2Touched = false;
      this.noMoreSubsTeam2 = true;
    };

    if (!this.team2) return;
    if (this.team2.length >= 5) this.isTeam2Touched = false;

    this.heroSelectForm.setValue({
      heroName: '',
    });

    console.log('>>>>touched2', this.isTeam2Touched);

    this.setStorageTeam2();
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

  newGame() {
    this.getHeroesAndSetGame();

    console.log(this.looseMessageTeam1);
  }

}
