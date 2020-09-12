import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './Modules/first-page/first-screen/first-screen.component';
import { OutletComponent } from './outlet/outlet.component';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'VirtualLab',
    pathMatch: 'full', 
  },
  { path: 'VirtualLab',
  component: OutletComponent,
  children: [
    { path: 'login',
      component: FirstScreenComponent,
      pathMatch: 'full' }
              ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
  
    })
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
