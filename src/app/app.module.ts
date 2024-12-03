import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router'; // Necessário para o router-outlet

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Certifique-se de que está declarado
    FooterComponent  // Certifique-se de que está declarado
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])// Necessário para utilizar <router-outlet>
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }