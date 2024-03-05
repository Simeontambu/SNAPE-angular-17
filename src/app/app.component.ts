import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import * as fr from '@angular/common/locales/fr';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule, FaceSnapListComponent, HeaderComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
})
export class AppComponent {

  constructor() {
    registerLocaleData(fr.default);
  }


}
