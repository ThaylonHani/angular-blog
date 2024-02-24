import { Component, Input } from '@angular/core';
import { cardsData } from '../data/cardsData';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css', './new-card.responsive.component.css']
})
export class NewCardComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}
  @Input()
  Id: string = "0";
  newCard:{id:string, name:string, url:string, description:string}[] = [];
  pageId:string | null = "0" ;
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.pageId = value.get("id");
    })
    this.newCard = cardsData.filter((card) => card.id == this.Id && card.type == 'newCard' && card.id !== this.pageId ? card : false);
  }
}
