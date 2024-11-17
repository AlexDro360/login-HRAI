import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css',
  standalone: true,
  imports: [ MatMenuModule],
})
export class MenuSuperiorComponent {}