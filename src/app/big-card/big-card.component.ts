import { Component, Input } from '@angular/core';
import { cardsData } from '../data/cardsData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent {
  @Input()
  Id:String = ''
  bigCard:{id:string, name:string, url:string, description:string}[] = [];
  ngOnInit(): void {
    this.bigCard = cardsData.filter((card) => card.id == this.Id? card : false);
  }

}
