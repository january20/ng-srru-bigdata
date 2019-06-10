import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeComponent } from './population/income/income.component';
import { PopulationAllComponent } from './population/population-all/population-all.component';
import { AgeComponent } from './population/age/age.component';
import { OccupationComponent } from './population/occupation/occupation.component';
import { EducationComponent } from './population/education/education.component';

const routes: Routes = [
  {
    path: 'population',
    children: [
      {
        path: '',
        component: PopulationAllComponent
      },
      {
        path: 'income',
        component: IncomeComponent
      },
      {
        path: 'age',
        component: AgeComponent
      },
      {
        path: 'occupation',
        component: OccupationComponent
      },
      {
        path: 'education',
        component: EducationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
