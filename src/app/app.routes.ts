import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const AppRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: IndexComponent }
];
