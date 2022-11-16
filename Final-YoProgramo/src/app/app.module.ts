import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LoginComponent } from './components/login/login.component';
import { HistoriaLaboralComponent } from './components/historia-laboral/historia-laboral.component';
import { HistoriaEducacionComponent } from './components/historia-educacion/historia-educacion.component';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    LoginComponent,
    HistoriaLaboralComponent,
    HistoriaEducacionComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoundProgressModule
  ],
  providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#f00',
      background: '#0f0'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
