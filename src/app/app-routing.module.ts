import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [{
  path: '', component: HomePageComponent

},
{
  path: 'popup', component: PopupComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
