import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioBackendComponent } from './portfolio/projects/portfolio-backend/portfolio-backend.component'; // amb ruta desde app
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


export const AppRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/backend', component: PortfolioBackendComponent },
  { path: 'portfolio/puntoyseguido', component: PuntoyseguidoBackendComponent }, // portfolio/puntoyseguido podria posar-li platan/pera
  { path: 'portfolio/boxeador', component: PortfolioBoxeadorComponent },
  { path: 'portfolio/impremta', component: PortfolioImpremtaComponent },
  { path: 'portfolio/makeyoursuit', component: PortfolioMakeyoursuitComponent },
  { path: 'portfolio/procter', component: PortfolioProcterComponent },
  { path: 'portfolio/saltinbanquin', component: PortfolioSaltinbanquinComponent },
  { path: 'portfolio/smartlink', component: PortfolioSmartlinkComponent },
  { path: 'portfolio/tedclothing', component: PortfolioTedclothingComponent },
  { path: 'portfolio/trenes', component: PortfolioTrenesComponent },
  { path: 'portfolio/xerpa', component: PortfolioXerpaComponent },
  { path: 'portfolio/schweppes', component: PortfolioSchweppesComponent },
  { path: 'portfolio/nestle', component: PortfolioNestleComponent },
  { path: '**', component: IndexComponent }
];
