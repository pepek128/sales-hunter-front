import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { DealListComponent } from './deal-list/deal-list.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { SearchComponent } from './search/search.component';
import { DescResultsComponent } from './desc-results/desc-results.component';
import { NameResultsComponent } from './name-results/name-results.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DealEditComponent } from './deal-edit/deal-edit.component';
import { 
    AuthGuardService as AuthGuard 
  } from './auth-guard.service';



const routes: Routes = [
    { path: '', component: DealListComponent },
    { path: 'add', component: AddDealComponent, canActivate: [AuthGuard]  },
    { path: 'deals/:id', component: DealDetailsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/descResults/:text', component: DescResultsComponent },
    { path: 'search/nameResults/:name', component: NameResultsComponent },
    { path: 'search/catResults/:categoryID', component: CatResultsComponent },
    { path: 'auth/login',component: LoginComponent  },
    { path: 'signup',component: RegisterComponent   },
    { path: 'edit/:id', component: DealEditComponent,canActivate: [AuthGuard]  },

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
