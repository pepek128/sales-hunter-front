import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { DealListComponent } from './deal-list/deal-list.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';

const routes: Routes = [
  { path: '', component: DealListComponent},
  { path: 'add', component: AddDealComponent },
  { path: 'deals/:id', component: DealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
