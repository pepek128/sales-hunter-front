import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  id : String;
  name:any;
  username: any;
  deal: Array<any>;
  isLoggedIn: any;
  
  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;     
      this.name=this.tokenStorage.getUsername(); 
    }  
    this.id = this.route.snapshot.paramMap.get("id")
    this.dealService.getDeal(this.id).subscribe(data => {  
      
        for (var j = 0; j < data.votedDTO.length; j++) {
        
          if(data.votedDTO[j].username === this.name)
          {
            data.voted=this.name;
          
        }}


      this.deal = data;
    });
   
  }
  plusScore(deal) {
    
    let url = "http://localhost:8080/deal";
    var updateData = new FormData();
   

   
    deal.score = deal.score + 1;
    deal.voted=this.tokenStorage.getUsername();   
    updateData.append('id', deal.dealID);
    updateData.append('score', deal.score);
    updateData.append('voted', deal.voted)

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