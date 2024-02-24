import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cardsData } from '../data/cardsData';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css'],
})
export class SmallCardComponent {
  @Input()
  Id: string = "0";
  items:{id:string, name:string, url:string, description:string}[] = [];
  ngOnInit(): void {
    this.items = cardsData.filter((card) => card.id == this.Id && card.type == 'card' ? card : null);
  }
}
