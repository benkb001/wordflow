import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickableModule } from './components/clickable/clickable.module'; 
import { FormModule } from './components/form/form.module';
import { SignUpModule } from './components/signUp/signUp.module';
import { SignInModule } from './components/signIn/signIn.module'; 
import { AppRoutingModule } from './app-routing.module'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    ReactiveFormsModule,

    AppRoutingModule,
    ClickableModule,
    FormModule,
    SignInModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
