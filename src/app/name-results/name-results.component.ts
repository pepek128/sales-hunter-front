import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-name-results',
  templateUrl: './name-results.component.html',
  styleUrls: ['./name-results.component.css']
})
export class NameResultsComponent implements OnInit {

  name : String;
  deals: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name")
    this.dealService.getDealsByName(this.name).subscribe(data => {
      this.deals = data;
    });
  }
  plusScore(deal){
    let url = "http://localhost:8080/deals";
  deal.score=deal.score+1;
  this.http.put(url, deal).subscribe(
    res =>{
      
    },
    err =>{
      alert("Błąd dodawania okazji");  }
  );

  }
  minusScore(deal){
    let url = "http://localhost:8080/deals";
  deal.score=deal.score-1;
  this.http.put(url, deal).subscribe(
    res =>{
      
    },
    err =>{
      alert("Błąd dodawania okazji");  }
  );
  }

}
