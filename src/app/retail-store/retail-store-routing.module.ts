import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailStoreComponent } from './retail-store.component'

const routes: Routes = [
  { path: '', component: RetailStoreComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild([
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
            children: [{
              path: '',
              component: RetailStoreComponent
            }
            ]
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class RetailerStoreRoutingModule { }

