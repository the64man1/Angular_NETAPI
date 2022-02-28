import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details.component';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
