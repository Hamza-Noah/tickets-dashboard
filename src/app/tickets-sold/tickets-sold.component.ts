import { Component } from '@angular/core';

interface ticket {

  ticketCount: number;
  user: object;
  ticketNumber: string;
  ticketPrice: number;
  cinema: string;
  numberOfPeople: number;
  numberOfPurchases: string;
  ticket: object;
}

@Component({
  selector: 'app-tickets-sold',
  templateUrl: './tickets-sold.component.html',
  styleUrls: ['./tickets-sold.component.scss']
})
export class TicketsSoldComponent {

  tickets: ticket[] = [
    {
      ticketCount: 1,
      user: { img: "Ma", name: 'Alice', phone: "0123456789" },
      ticketNumber: 'C-101',  // Updated
      ticketPrice: 10.99,
      cinema: 'Cineplex',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Regular' },
    },
    {
      ticketCount: 2,
      user: { img: "../../assets/user-1.jpg", name: 'Bob', phone: "0123456789" },
      ticketNumber: 'C-102',  // Updated
      ticketPrice: 19.99,
      cinema: 'AMC Theatres',
      numberOfPeople: 2,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'VIP' },
    },
    {
      ticketCount: 3,
      user: { img: "Ma", name: 'أحمد محمود', phone: "0123456789" },
      ticketNumber: 'C-103',  // Updated
      ticketPrice: 8.5,
      cinema: 'Regal Cinemas',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Matinee' },
    },
    {
      ticketCount: 4,
      user: { name: 'Charlie', phone: "0123456789" },
      ticketNumber: 'C-104',  // Updated
      ticketPrice: 8.5,
      cinema: 'Regal Cinemas',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Matinee' },
    },
    // Rest of the objects with updated ticketNumber values
  ];

}




