import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddReactComponent } from './add-react/add-react.component';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './logout.guard';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [LoginGuard] },
      { path: ':id', component: InfosComponent },
      { path: 'edit/:id', component: UpdateComponent },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'add-react', component: AddReactComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'msword', component: MsWordComponent },
  { path: 'serveur', loadChildren: '../app/sub/sub.module#SubModule' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
