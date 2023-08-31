import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics-use/statistics-use.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsBarComponent } from './tickets-bar/tickets-bar.component';
import { TicketsSoldComponent } from './tickets-sold/tickets-sold.component';
import { TicketNumberComponent } from './ticket-number/ticket-number.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    TicketComponent,
    TicketsBarComponent,
    TicketsSoldComponent,
    TicketNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
