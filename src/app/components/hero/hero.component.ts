import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero:any;
  @Output() onDelete = new EventEmitter<string>();
  imageUrl = '../../assets/images/';

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.onDelete.emit(this.hero.name);
  }
}
