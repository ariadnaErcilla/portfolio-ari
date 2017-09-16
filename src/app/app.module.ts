import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IndexComponent } from './index/index.component';
import { PortfolioBackendComponent } from './portfolio/projects/portfolio-backend/portfolio-backend.component';
import { PuntoyseguidoBackendComponent } from './portfolio/projects/puntoyseguido-backend/puntoyseguido-backend.component';
import { PortfolioBoxeadorComponent } from './portfolio/projects/portfolio-boxeador/portfolio-boxeador.component';
import { PortfolioImpremtaComponent } from './portfolio/projects/portfolio-impremta/portfolio-impremta.component';
import { PortfolioMakeyoursuitComponent } from './portfolio/projects/portfolio-makeyoursuit/portfolio-makeyoursuit.component';
import { PortfolioProcterComponent } from './portfolio/projects/portfolio-procter/portfolio-procter.component';
import { PortfolioSaltinbanquinComponent } from './portfolio/projects/portfolio-saltinbanquin/portfolio-saltinbanquin.component';
import { PortfolioSmartlinkComponent } from './portfolio/projects/portfolio-smartlink/portfolio-smartlink.component';
import { PortfolioTedclothingComponent } from './portfolio/projects/portfolio-tedclothing/portfolio-tedclothing.component';
import { PortfolioTrenesComponent } from './portfolio/projects/portfolio-trenes/portfolio-trenes.component';
import { PortfolioXerpaComponent } from './portfolio/projects/portfolio-xerpa/portfolio-xerpa.component';
import { PortfolioSchweppesComponent } from './portfolio/projects/portfolio-schweppes/portfolio-schweppes.component';
import { PortfolioNestleComponent } from './portfolio/projects/portfolio-nestle/portfolio-nestle.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    IndexComponent,
    PortfolioBackendComponent,
    PuntoyseguidoBackendComponent,
    PortfolioBoxeadorComponent,
    PortfolioImpremtaComponent,
    PortfolioMakeyoursuitComponent,
    PortfolioProcterComponent,
    PortfolioSaltinbanquinComponent,
    PortfolioSmartlinkComponent,
    PortfolioTedclothingComponent,
    PortfolioTrenesComponent,
    PortfolioXerpaComponent,
    PortfolioSchweppesComponent,
    PortfolioNestleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
