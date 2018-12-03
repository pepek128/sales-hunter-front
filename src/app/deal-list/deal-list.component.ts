import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals : Array<any>;
  constructor(private dealService: DealService) { }

  ngOnInit() {

    this.dealService.getAll().subscribe(data => {
      this.deals = data;
    });
  }
}
