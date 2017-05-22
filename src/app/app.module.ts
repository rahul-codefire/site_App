import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }          from './app.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { CrisisListComponent }   from './crisis/crisis-list.component';
import { HeroListComponent }     from './hero/hero-list.component';
import { PageNotFoundComponent } from './notfound/not-found.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ThreeColComponent } from './three-col/three-col.component';
import { TabledataComponent } from './tabledata/tabledata.component';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'tabeldata', component: TabledataComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
	CarouselModule.forRoot(),
	ProgressbarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    DefaultComponent,
    HeaderComponent,
    SliderComponent,
    ThreeColComponent,
    TabledataComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


