import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundProgressModule} from 'angular-svg-round-progressbar';

const routes: Routes = [
  {path:'bar',component: RoundProgressModule},
  {path:'**', pathMatch:'full', redirectTo:'bar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
