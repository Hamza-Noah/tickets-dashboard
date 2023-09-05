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
  imgSrc: string = "../../assets/images/";

  tickets: ticket[] = [
    {
      ticketCount: 1,
      user: { img: "Ma", name: 'أحمد محمود', phone: "0123456789" },
      ticketNumber: 'C-101',  // Updated
      ticketPrice: 40,
      cinema: 'Cineplex',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Regular' },
    },
    {
      ticketCount: 2,
      user: { img: "user-1.jpg", name: 'محمد الغريب', phone: "0123456789" },
      ticketNumber: 'C-102',  // Updated
      ticketPrice: 30,
      cinema: 'AMC Theatres',
      numberOfPeople: 2,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'VIP' },
    },
    {
      ticketCount: 3,
      user: { img: "user-2.jpg", name: 'محمد الغريب', phone: "0123456789" },
      ticketNumber: 'C-103',  // Updated
      ticketPrice: 45,
      cinema: 'Regal Cinemas',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Matinee' },
    },
    {
      ticketCount: 4,
      user: { name: 'محمد الغريب', phone: "0123456789" },
      ticketNumber: 'C-104',  // Updated
      ticketPrice: 54,
      cinema: 'Regal Cinemas',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { type: 'Matinee' },
    },
  ];

}




