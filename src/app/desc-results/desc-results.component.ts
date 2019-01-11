import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-desc-results',
  templateUrl: './desc-results.component.html',
  styleUrls: ['./desc-results.component.css']
})
export class DescResultsComponent implements OnInit {

   
  text : String;
  deals: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text")
    this.dealService.getDealsByDesc(this.text).subscribe(data => {
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
