import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { CgnewsapiService } from './service/cgnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    HealthComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CgnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
