import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NidhalComponent } from './nidhal/nidhal.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstServiceService } from './first-service.service';
import { SecondService } from './second.service';
import { RecruteComponent } from './recrute/recrute.component';
import { AddaccountComponent } from './accounts/addaccount/addaccount.component';
import { ListaccountComponent } from './accounts/listaccount/listaccount.component';
import { HomeaccountComponent } from './accounts/homeaccount/homeaccount.component';
import { HomeComponent } from './home/home.component';
import { DMWM_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoImagePipe } from './no-image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NidhalComponent,
    ParentComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruteComponent,
    AddaccountComponent,
    ListaccountComponent,
    HomeaccountComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    UpdateComponent,
    NotFoundComponent,
    NoImagePipe
  ],
  imports: [
  BrowserModule,
    FormsModule,
    DMWM_ROUTING
  ],
  providers: [FirstServiceService, SecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
