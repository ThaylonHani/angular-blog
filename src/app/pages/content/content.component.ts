import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardsData } from '../../data/cardsData';
import { NewCardComponent } from '../../new-card/new-card.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,NewCardComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent {
  constructor(
    private route: ActivatedRoute,
  ) { };
  card:{id:string, name:string, url:string, description:string}[] = [];
  ngOnInit():void {
    this.route.paramMap.subscribe(value => {
      this.card = cardsData.filter((card) => card.id == value.get("id"))
    })
  }
}
