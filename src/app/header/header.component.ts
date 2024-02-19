import { Component } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuItemsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
