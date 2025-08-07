import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module'; 
import { FormModule } from './components/form/form.module';
import { HomeModule } from './components/home/home.module'; 
import { SignUpModule } from './components/signUp/signUp.module';
import { SignInModule } from './components/signIn/signIn.module'; 
import { AppRoutingModule } from './app-routing.module'; 
import { WriteModule } from './components/write/write.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    ReactiveFormsModule,

    AppRoutingModule,
    FooterModule,
    FormModule,
    HomeModule,
    SignInModule,
    SignUpModule,
    WriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
