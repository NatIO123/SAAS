import { Component,inject, NgModule } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BodyComponent } from "./components/body/body.component";
import { CommonModule } from '@angular/common';
import { Pag1Component } from './pag1/pag1.component';

NgModule({
  declarations: [
    Pag1Component

  ],
  imports: [
    Router,
    RouterModule

  ],

})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BodyComponent, RouterModule, CommonModule, Pag1Component, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newsletter';
  router = inject(Router)

  navigate(){
    this.router.navigate(['/pag1']);
  }

}

