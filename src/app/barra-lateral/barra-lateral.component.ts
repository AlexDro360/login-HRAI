import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import { UserService } from '../services/user.service';

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatButtonModule, MatMenuModule, MatSidenavModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraLateralComponent {
  constructor(private userservice :UserService){}

  cerrarSesion(){
    this.userservice.cerrarSesion();
  }
}
