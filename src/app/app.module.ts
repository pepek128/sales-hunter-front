import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { DealService } from './deal.service';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AddDealComponent } from './add-deal/add-deal.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  

import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,     
  MatSidenavModule, 
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatListModule      
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';




@NgModule({
  exports: [
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatSidenavModule,
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule    
  ],
  declarations: [
    AppComponent,
    DealListComponent,
    AddDealComponent,
    SidenavComponent,
    
    
   
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,   
    MatInputModule,        
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule, LayoutModule, MatSidenavModule, MatListModule      
  ],
  providers: [DealService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
