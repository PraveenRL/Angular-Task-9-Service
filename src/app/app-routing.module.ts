import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path : '', redirectTo : 'list-data', pathMatch : 'full' },
  { path : 'list-data', component : ListDataComponent },
  { path : 'add-data', component : AddDataComponent },
  { path : 'view/:id', component : ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
