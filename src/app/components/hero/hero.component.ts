import { Component, Input } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero:any;
  imageUrl = '../../assets/images/';

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    
  }

}
