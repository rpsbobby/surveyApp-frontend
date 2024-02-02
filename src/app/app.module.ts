import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './modules/main/navbar/navbar.component';
import { MainModule } from './modules/main/main.module';
import { FooterComponent } from './common/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule {}
