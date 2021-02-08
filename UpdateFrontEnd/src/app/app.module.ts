import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import { LocalStorageService } from './core/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [ AuthService, LocalStorageService, Router ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
