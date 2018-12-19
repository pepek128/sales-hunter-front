import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  id : String;
  deal: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.dealService.getDeal(this.id).subscribe(data => {
      this.deal = data;
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


  }
  minusScore(deal){
    let url = "http://localhost:8080/deals";
  deal.score=deal.score-1;
  this.http.put(url, deal).subscribe(
    res =>{
      
    },
    err =>{
      alert("Błąd dodawania okazji");  }

}
}