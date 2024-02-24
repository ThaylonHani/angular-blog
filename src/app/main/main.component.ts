import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { SmallCardComponent } from '../small-card/small-card.component';
import { BigCardComponent } from '../big-card/big-card.component';
import { cardsData } from '../data/cardsData';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TitleComponent,SmallCardComponent,BigCardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','./main.responsive.component.css']
})
export class MainComponent {
  cards = cardsData;
}
