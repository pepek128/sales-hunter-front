import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient} from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css']
})
export class CatResultsComponent implements OnInit {
  isLoggedIn:any;
  name: any;
  categoryID : String;
  deals: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;        
      this.name=this.tokenStorage.getUsername();
    } 
    this.categoryID = this.route.snapshot.paramMap.get("categoryID")
    this.dealService.getDealsByCat(this.categoryID).subscribe(data => {      
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].votedDTO.length; j++) {
        
          if(data[i].votedDTO[j].username === this.name)
          {
            data[i].voted=this.name;
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
