import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import path from 'path';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';



export const routes: Routes = [
{
  path:'header',

  component:HeaderComponent,
},
{path:'footer',
  component:FooterComponent,
},
{path:'body',
  component:BodyComponent,


},
{path:'pag1',
  component: Pag1Component,


},

{path:'pag2',
  component: Pag2Component,
}



];
