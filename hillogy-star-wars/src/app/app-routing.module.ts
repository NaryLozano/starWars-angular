import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes =[
  { path: 'list', component: StarshipsListComponent},
  { path: 'id', component: StarshipDetailComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
