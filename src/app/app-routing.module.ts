import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailStoreComponent } from './retail-store/retail-store.component';


const routes: Routes = [
  { path: '', component: RetailStoreComponent }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
 imports: [RouterModule.forRoot([
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'retail',
        pathMatch: 'full'
      },
      {
        path: 'retail',
        loadChildren: './retail-store/retail-store.module#RetailStoreModule'  
      }
    ]
  },

]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
