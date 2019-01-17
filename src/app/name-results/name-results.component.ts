import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-name-results',
  templateUrl: './name-results.component.html',
  styleUrls: ['./name-results.component.css']
})
export class NameResultsComponent implements OnInit {
  isLoggedIn: any;
  name : String;
  deals: Array<any>;
  votename: any;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;   
      this.votename=this.tokenStorage.getUsername();   
    }         
    
    this.name = this.route.snapshot.paramMap.get("name")
  

    this.dealService.getDealsByName(this.name).subscribe(data => {      
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].votedDTO.length; j++) {
        
          if(data[i].votedDTO[j].username === this.votename)
          {
            data[i].voted=this.votename;
          }
        }}  this.deals = data;
        
    
        
    
    });
  }
  plusScore(deal) {
    
    let url = "http://localhost:8080/deal";
    var updateData = new FormData();


   
    deal.score = deal.score + 1;
    deal.voted=this.tokenStorage.getUsername();   
    updateData.append('id', deal.dealID);
    updateData.append('score', deal.score);
    updateData.append('voted', deal.voted);

    this.http.put(url, updateData).subscribe(
      res => {

      },
      err => {
        alert("Błąd dodawania okazji");
      }
    );
    

  }
  minusScore(deal) {
    let url = "http://localhost:8080/deal";
    var updateData = new FormData();
    
  
    deal.score = deal.score - 1;
    deal.voted=this.tokenStorage.getUsername();    
    updateData.append('id', deal.dealID);
    updateData.append('score', deal.score);
    updateData.append('voted', deal.voted);
    this.http.put(url, updateData).subscribe(
      res => {

      },
      err => {
        alert("Błąd dodawania okazji");
      }
    );

    
  }

}
