import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';


const routes: Routes = [
  {path:'', component: TopheadlineComponent }, //Top headlines and Home 
  {path:'tech', component: TechComponent },
  {path:'well', component: HealthComponent },
  {path:'buzz', component: BusinessComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
