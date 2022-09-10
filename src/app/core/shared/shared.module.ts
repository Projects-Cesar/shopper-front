import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    NavBarComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    NotFoundComponent,
    NavBarComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
