import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './views/projects/projects.module#ProjectsModule' },
  {
    path: '',
    redirectTo: 'projects/create',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   component: xx
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
