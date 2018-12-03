import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { DealListComponent } from './deal-list/deal-list.component';
import { AddDealComponent } from './add-deal/add-deal.component';

const routes: Routes = [
  { path: '', component: DealListComponent},
  { path: 'add', component: AddDealComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
