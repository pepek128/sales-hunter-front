import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';



@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {
  file: File;
 



  categories : Array<any>;
  model = new FormGroup({
  name : new FormControl('',[Validators.required, Validators.maxLength(60)]),
  description: new FormControl('',Validators.required),
  price: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{1,7} zł")]),
  categoryID: new FormControl('',Validators.required),
  link: new FormControl('', Validators.pattern("^www\.([a-zA-Z0-9.-])+(\.[a-z]{2,3})$")),
  image: new FormControl(''),
  
  });
  public vis=false;
  imgurl:'';

  constructor(private categoryService: CategoryService, private http: HttpClient) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categories= data;
  });
 

}
get f() { return this.model.controls; }
addDeal(): void {   
 
  var veri;   
  let url = "http://localhost:8080/deals";
  let imgl = 'http://localhost:8080/uploadfile';
  var uploadData = new FormData();  
  uploadData.append('file', this.file); 
  

this.http.post(url, this.model.value).subscribe(
  res =>{
    location.reload() ;
  },
  err =>{
    alert("Błąd dodawania okazji");  }
)
this.http.post(imgl, uploadData).subscribe(data => {
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
 this.model.patchValue({image : this.file.name});

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


