import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeursComponent } from './serveurs/serveurs.component';
import { DetailServeurComponent } from './detail-serveur/detail-serveur.component';
import { EditServeurComponent } from './edit-serveur/edit-serveur.component';
import { SUB_ROUTING } from './sub.routing';



@NgModule({
  declarations: [ServeursComponent, DetailServeurComponent, EditServeurComponent],
  imports: [
    CommonModule,
    SUB_ROUTING
  ]
})
export class SubModule { }
