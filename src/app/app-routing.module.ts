import { EditCandidateDetailsComponent } from './edit-candidate-details/edit-candidate-details.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  
  {path:'', component:HomePageComponent},
  {path:'candidate-list', component:CandidateListComponent},
  {path:'add-candidate',component:AddCandidateComponent},
  {path:'candidate-details/:id',component:ViewDetailsComponent},
  {path:'candidate-details/edit-candidate-details/:id',component:EditCandidateDetailsComponent},
      
{
  path: '**',
  component: WildCardComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
