import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GolProfilesComponent } from './gol-profiles/gol-profiles.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    GolProfilesComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    GolProfilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
