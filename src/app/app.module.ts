import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from './graphql.module';
import { shortenUrl } from './pipes/shorten-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    shortenUrl,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
