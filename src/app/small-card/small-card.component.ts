import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  items = [
    {
      name: 'Projetinho 1',
      url : '../../assets/prog-header.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum reprehenderit fuga sapiente iste in voluptas aut expedita eaque odio sequi necessitatibus accusantium dolorem, numquam unde sint fugit optio ipsam.'
    },
    {
      name: 'Projetinho 2',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 2'
    },
    {
      name: 'Projetinho 3',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 3'
    },
    {
      name: 'Projetinho 4',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 4'
    },
    {
      name: 'Projetinho 5',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 4'
    },
    {
      name: 'Projetinho 6',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 4'
    },
    {
      name: 'Projetinho 7',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 4'
    },
    {
      name: 'Projetinho 8',
      url : '../../assets/prog-header.jpg',
      description: 'projetinho de merda 4'
    },
  ]
}
