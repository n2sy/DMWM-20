import { RouterModule, Routes } from "@angular/router";
import { DetailServeurComponent } from "./detail-serveur/detail-serveur.component";
import { EditServeurComponent } from "./edit-serveur/edit-serveur.component";
import { ServeursComponent } from "./serveurs/serveurs.component";


const subRoutes : Routes = [
    {path : 'serveur', component : ServeursComponent, children : [
        {path : ':id', component: DetailServeurComponent},
        {path : 'edit/:id', component: EditServeurComponent}
    ]}
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);