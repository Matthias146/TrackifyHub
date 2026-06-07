import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { routes } from './app.routes';
import {
  tablerLayoutDashboard,
  tablerShoppingCart,
  tablerUsers,
  tablerChartBar,
  tablerSettings,
  tablerHelpCircle,
  tablerBell,
  tablerSearch,
} from '@ng-icons/tabler-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      tablerLayoutDashboard,
      tablerShoppingCart,
      tablerUsers,
      tablerChartBar,
      tablerSettings,
      tablerHelpCircle,
      tablerBell,
      tablerSearch,
    }),
  ],
};
