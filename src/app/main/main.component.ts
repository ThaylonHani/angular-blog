import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { SmallCardComponent } from '../small-card/small-card.component';
import { BigCardComponent } from '../big-card/big-card.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TitleComponent,SmallCardComponent,BigCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
