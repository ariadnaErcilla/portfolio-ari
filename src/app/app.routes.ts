import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioBackendComponent } from './portfolio/projects/portfolio-backend/portfolio-backend.component'; // amb ruta desde app
import { PuntoyseguidoBackendComponent } from './portfolio/projects/puntoyseguido-backend/puntoyseguido-backend.component';


export const AppRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/backend', component: PortfolioBackendComponent },
  { path: 'portfolio/puntoyseguido', component: PuntoyseguidoBackendComponent }, // portfolio/puntoyseguido podria posar-li platan/pera
  { path: '**', component: IndexComponent }
];
