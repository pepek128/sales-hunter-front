import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {
  image: File;
  categories : Array<any>;
  model : DealAddModel = {
  name:'',
  price:'',
  link:'',
  description:'',
  categoryID:0 
  
  };
  public vis=false;
  imgurl:'';

  constructor(private categoryService: CategoryService, private http: HttpClient) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categories= data;
  });


}
addDeal(): void {  
  let url = "http://localhost:8080/deals";
  let imgl = 'http://localhost:8080/uploadFile';
  var uploadData = new FormData();
  uploadData.append('image', this.image);
 

 
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'multipart/form-data'    
   })
};
        this.http.post('http://localhost:8080/uploadFile', uploadData,httpOptions);

 

  
  

this.http.post(url, this.model).subscribe(
  res =>{
    location.reload() ;
  },
  err =>{
    alert("Błąd dodawania okazji");  }
)


}

onFileSelected(event){
  this.image=event.target.files[0];
  this.vis=true;  
  var reader = new FileReader();

  reader.readAsDataURL(event.target.files[0]); // read file as data url
 
  reader.onload = (event:any) => { // called once readAsDataURL is completed
  this.imgurl = event.target.result;}
}

deleteImg(){
this.vis=false;
this.imgurl='';
this.image=null;


}
}
export interface DealAddModel{
  description:String
  name:String
  price:String
  categoryID:Number
  link:String
}

