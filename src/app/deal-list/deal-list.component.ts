import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  voted: any;   
  name: any;
  deals: Array<any>;     
  isLoggedIn: any;
  constructor(private dealService: DealService, private http: HttpClient, private token: TokenStorageService) { }

  ngOnInit() {



    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.name=this.token.getUsername();
      
    }

    this.dealService.getAll().subscribe(data => {      
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
    deal.voted=this.token.getUsername();   
    
    
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
    deal.voted=this.token.getUsername();    
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

  edit(deal){
    window.location.href="/edit/"+deal.dealID;
  
  }
}
