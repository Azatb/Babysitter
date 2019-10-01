import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { FindSitterComponent } from './portal/find-sitter/find-sitter.component';
import { FindBabyComponent } from './portal/find-baby/find-baby.component';
import { IndexComponent } from './home/index/index.component';
import { LoginGuard } from './auth/login.guard';
import { EditSitterComponent } from './portal/find-sitter/sitter/edit-sitter/edit-sitter.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},

{ path: 'home', component: HomeComponent }, // definere mine router
{ path: 'index', component: IndexComponent },
{ path: 'login', component: LoginComponent },
{ path: 'contact', component: ContactComponent },
// 
{
  path: 'portal', component: PortalComponent, canActivate: [LoginGuard], children: [ // children dør 2, loginguard beskytter. 
    { path: 'findsitter', component: FindSitterComponent },   //canActivate bliver brugt i login.g  
    { path: 'editsitter', component: EditSitterComponent },  // kan ikke komme ind til path uden log in
    { path: 'findbaby', component: FindBabyComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // definere routing til projektet
  exports: [RouterModule]
})
export class AppRoutingModule { }
