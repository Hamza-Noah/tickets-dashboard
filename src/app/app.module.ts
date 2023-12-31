import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics-use/statistics-use.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsBarComponent } from './tickets-bar/tickets-bar.component';
import { TicketsSoldComponent } from './tickets-sold/tickets-sold.component';
import { TicketNumberComponent } from './ticket-number/ticket-number.component';

import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    TicketComponent,
    TicketsBarComponent,
    TicketsSoldComponent,
    TicketNumberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputSwitchModule,
    TableModule,
    PaginatorModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
