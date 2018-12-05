import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {
  file: File;
  
  categories : Array<any>;
  model : DealAddModel = {
  name:'',
  price:'',
  image:'',
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
  this.model.image=this.file.name;
  var veri;   
  let url = "http://localhost:8080/deals";
  let imgl = 'http://localhost:8080/uploadfile';
  var uploadData = new FormData();
  uploadData.append('file', this.file);
 

 

    

  
  

this.http.post(url, this.model).subscribe(
  res =>{
    location.reload() ;
  },
  err =>{
    alert("Błąd dodawania okazji");  }
)
this.http.post('http://localhost:8080/uploadfile', uploadData).subscribe(data => {
  console.log( data['_body']);
  veri=data['_body'];
  veri = veri.replace(/\\/g, "");
  veri = JSON.parse(veri);
  alert(veri);
});



}

onFileSelected(event){
  this.file=event.target.files[0];
  this.vis=true;  
  var reader = new FileReader();

  reader.readAsDataURL(event.target.files[0]); // read file as data url
 
  reader.onload = (event:any) => { // called once readAsDataURL is completed
  this.imgurl = event.target.result;}
}

deleteImg(){
this.vis=false;
this.imgurl='';
this.file=null;


}
}
export interface DealAddModel{
  description:String
  name:String
  price:String
  categoryID:Number
  link:String
  image:String
}

