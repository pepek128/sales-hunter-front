import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { ActivatedRoute } from "@angular/router";
import { TokenStorageService } from '../auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-deal-edit',
  templateUrl: './deal-edit.component.html',
  styleUrls: ['./deal-edit.component.css']
})
export class DealEditComponent implements OnInit {
  vis = false;
  file: File;
  imgurl: '';
  author:any;
  id: String;
  name: any;
  username: any;
  deal: Array<any>;
  isLoggedIn: any;
  categories: Array<any>;
  model = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(1200)]),
    price: new FormControl('', Validators.pattern(/^[0-9]{1,7}(\,[0-9]{2})* zł$/)),
    categoryID: new FormControl('', Validators.required),
    link: new FormControl('', Validators.pattern(/^www\.([a-zA-Z0-9.-])+(\.[a-z]{2,3})((\/{1})(.*))*$/)),
    image: new FormControl(''),
    username: new FormControl(),


  });
  constructor(private route: ActivatedRoute, private dealService1: DealService, private http: HttpClient, private tokenStorage: TokenStorageService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")  
    this.dealService1.getDeal(this.id).subscribe(data1 => {   
      this.author=data1.userDTO.username;  
        for (var j = 0; j < data1.votedDTO.length; j++) {
        
          if(data1.votedDTO[j].username === this.name)
          {
            data1.voted=this.name;
          
        }}


      this.deal = data1;
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.name = this.tokenStorage.getUsername();
    }
    this.categoryService.getAll().subscribe(data1 => {
      this.categories = data1;
      
    });
   
 
    
  
  }
 
    
  get f() { return this.model.controls; }
  updateDeal(deal): void {

    let url1 = "http://localhost:8080/edit";
    let imgl = 'http://localhost:8080/uploadfile';    
    var uploadData = new FormData();    
    uploadData.append('file', this.file);  
    deal.name = this.model.get("name").value;
    deal.description = this.model.get("description").value;
    deal.link = this.model.get("link").value;
    deal.price = this.model.get("price").value;
    deal.category.categoryID = this.model.get("categoryID").value;

    if (this.model.get("image").value.length != 0) {
      
      deal.image = this.model.get("image").value;
    }





    this.http.put(url1, deal).subscribe(
      res => {
        location.reload();

      },
      err => {
        alert("Błąd dodawania okazji");
      }
    )

    this.http.post(imgl, uploadData).subscribe(
      err => {
        alert("Błąd dodawania zdjęcia");
      }
    )



  }
  onFileSelected(event) {
    this.vis = true;
    this.file = event.target.files[0];
    var reader = new FileReader();
    this.model.patchValue({ image: this.file.name });
    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event: any) => { // called once readAsDataURL is completed
      this.imgurl = event.target.result;
    }
  }

  deleteImg() {

    this.vis = false;
    this.imgurl = '';
    this.file = null;


  }
  delete() {
    
    this.http.delete('http://localhost:8080/delete/' + this.id).subscribe(
      res => {
        window.location.href = "/";

      },
      err => {
        alert("Błąd usuwania okazji");
      }
    )
  }

}
