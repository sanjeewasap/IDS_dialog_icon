import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // default
];

/**
 * To test the application using the hashing routing strategy, swap the two lines below.
 */
export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { useHash: false });
