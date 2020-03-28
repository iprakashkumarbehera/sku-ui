import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailStoreComponent } from './retail-store/retail-store.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  { path: 'retail', component: RetailStoreComponent }
];


@NgModule({
 // imports: [RouterModule.forRoot(routes)],
 imports: [RouterModule.forRoot(routes)],
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'retail',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'retail',
  //       loadChildren: './retail-store/retail-store.module#RetailStoreModule'  
  //     }
  //   ]
  // },

// ]),
// ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
