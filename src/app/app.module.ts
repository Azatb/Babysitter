import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { ReactiveFormsModule, NgControl, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { FindSitterComponent } from './portal/find-sitter/find-sitter.component';
import { FindBabyComponent } from './portal/find-baby/find-baby.component';
import { IndexComponent } from './home/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatCardModule, MatButtonModule, MatIcon, MatIconModule, MatButtonToggle, MatButtonToggleModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { SitterComponent } from './portal/find-sitter/sitter/sitter.component';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { IAppState, rootReducer } from './stores/store';
import { HttpClientModule } from '@angular/common/http';
import { FilterSitters } from './portal/find-sitter/sitters.filter';
import { EditSitterComponent } from './portal/find-sitter/sitter/edit-sitter/edit-sitter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterBabyComponent,
    RegisterSitterComponent,
    HomeComponent,
    ContactComponent,
    PortalComponent,
    FindSitterComponent,
    FindBabyComponent,
    IndexComponent,
    SitterComponent,
    FilterSitters,
    EditSitterComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatExpansionModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) { 
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
      ngReduxRouter.initialize(/* args */);
    }
 }
 
