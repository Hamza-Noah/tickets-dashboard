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
  styleUrls: ['./tickets-sold.component.scss'],
})
export class TicketsSoldComponent {
  imgSrc: string = '../../assets/images/';
  // @ts-ignore
  selectedRows: number;
  totalRecords: number = 100; // Replace with the actual total record count
  first: number = 0;

  tickets: ticket[] = [
    {
      ticketCount: 1,
      user: { name: 'أحمد محمود', phone: '0123456789' },
      ticketNumber: 'C-101', // Updated
      ticketPrice: 40,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { ticketNumber: 'تذكرة رقم pdf.45', file: 'PDF', size: '9mb' },
    },
    {
      ticketCount: 2,
      user: { img: 'user-1.jpg', name: 'محمد الغريب', phone: '0123456789' },
      ticketNumber: 'C-102', // Updated
      ticketPrice: 30,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople: 2,
      numberOfPurchases: 'مرة واحدة',
      ticket: { ticketNumber: 'تذكرة رقم pdf.45', file: 'PDF', size: '9mb' },
    },
    {
      ticketCount: 3,
      user: { img: 'user-2.jpg', name: 'محمد الغريب', phone: '0123456789' },
      ticketNumber: 'C-103', // Updated
      ticketPrice: 45,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { ticketNumber: 'تذكرة رقم pdf.45', file: 'PDF', size: '9mb' },
    },
    {
      ticketCount: 4,
      user: { name: 'محمد الغريب', phone: '0123456789' },
      ticketNumber: 'C-104', // Updated
      ticketPrice: 54,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticket: { ticketNumber: 'تذكرة رقم pdf.45', file: 'PDF', size: '9mb' },
    },
  ];
}
