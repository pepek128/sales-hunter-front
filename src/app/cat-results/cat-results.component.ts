import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css']
})
export class CatResultsComponent implements OnInit {

  categoryID : String;
  deals: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient) { }

  ngOnInit() {
    this.categoryID = this.route.snapshot.paramMap.get("categoryID")
    this.dealService.getDealsByCat(this.categoryID).subscribe(data => {
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
