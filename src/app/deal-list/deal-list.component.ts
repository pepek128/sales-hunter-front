import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals : Array<any>;
  constructor(private dealService: DealService,private http: HttpClient) { }

  ngOnInit() {

    this.dealService.getAll().subscribe(data => {
      this.deals = data;
    });



  }
  plusScore(deal){
    let url = "http://localhost:8080/deal";
  deal.score=deal.score+1;
  this.http.put(url, deal).subscribe(
    res =>{
      
    },
    err =>{
      alert("Błąd dodawania okazji");  }
  );

  }
  minusScore(deal){
    let url = "http://localhost:8080/deal";
  deal.score=deal.score-1;
  this.http.put(url, deal).subscribe(
    res =>{
      
    },
    err =>{
      alert("Błąd dodawania okazji");  }
  );
  }


}
