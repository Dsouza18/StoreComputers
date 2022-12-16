import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from "@angular/material/snack-bar"

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
