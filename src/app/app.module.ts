import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { onAppInit, onReportInit } from './app.initializer';

export const APPROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'reports',
    loadChildren: './modules/reports/reports.module#ReportsModule'
  },
  {
    path: 'customer',
    loadChildren: './modules/customer/customer.module#CustomerModule'
  },
  {
    path: '**',
    loadChildren: './modules/not-found/notFound.module#NotFoundModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [Injector]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: onReportInit,
      multi: true,
      deps: [Injector]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
