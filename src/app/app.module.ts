import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsBarComponent } from './tickets-bar/tickets-bar.component';
import { TicketsSoldComponent } from './tickets-sold/tickets-sold.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    TicketComponent,
    TicketsBarComponent,
    TicketsSoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
