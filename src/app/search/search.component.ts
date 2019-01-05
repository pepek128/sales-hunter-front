import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private categoryService: CategoryService, private http: HttpClient) { }
  categories : Array<any>;

  
    name = new FormControl('',[Validators.required, Validators.maxLength(60)])
    
    
    text= new FormControl('',Validators.required)

 
    categoryID= new FormControl('',Validators.required)
 

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categories= data;
  });
  }
  

    
  
}
