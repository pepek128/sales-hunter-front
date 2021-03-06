import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FlexLayoutModule } from '@angular/flex-layout'; 

import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,       
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,     
  MatSidenavModule, 
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatListModule   
     
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { SearchComponent } from './search/search.component';
import { DescResultsComponent } from './desc-results/desc-results.component';
import { NameResultsComponent } from './name-results/name-results.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { VoteStatsService } from './vote-stats.service';
import { DealEditComponent } from './deal-edit/deal-edit.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


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
    DealDetailsComponent,
    SearchComponent,
    DescResultsComponent,
    NameResultsComponent,
    CatResultsComponent,
    LoginComponent,
    RegisterComponent,
    DealEditComponent,
   
    
   
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
    MatSlideToggleModule, LayoutModule, MatSidenavModule, MatListModule, 
    FlexLayoutModule ,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }) 
  ],
  providers: [DealService,CategoryService,httpInterceptorProviders,LoginComponent,VoteStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
