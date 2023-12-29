import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics-use.component.html',
  styleUrls: ['./statistics-use.component.scss'],
})
export class StatisticsComponent implements AfterViewInit {
  chart: any = [];

  ngAfterViewInit() {}
}
