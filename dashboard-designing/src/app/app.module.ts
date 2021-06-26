import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { TotalIncomeComponent } from './dashboard-body/total-income/total-income.component';
import { ArApBalanceComponent } from './dashboard-body/ar-ap-balance/ar-ap-balance.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PercentageIncomeExpensesComponent } from './dashboard-body/ar-ap-balance/percentage-income-expenses/percentage-income-expenses.component';
import { EbitCogsComponent } from './dashboard-body/ebit-cogs/ebit-cogs.component';
import { DisputedOverdueInvoicesComponent } from './dashboard-body/disputed-overdue-invoices/disputed-overdue-invoices.component';
import { DisputedInvoicesComponent } from './dashboard-body/disputed-overdue-invoices/disputed-invoices/disputed-invoices.component';
import { DisputedOverdueComponent } from './dashboard-body/disputed-overdue-invoices/disputed-overdue/disputed-overdue.component';
import { EbitComponent } from './dashboard-body/ebit/ebit.component';
import { InventoryTurnoverComponent } from './dashboard-body/ebit/inventory-turnover/inventory-turnover.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardBodyComponent,
    TotalIncomeComponent,
    ArApBalanceComponent,
    PercentageIncomeExpensesComponent,
    EbitCogsComponent,
    DisputedOverdueInvoicesComponent,
    DisputedInvoicesComponent,
    DisputedOverdueComponent,
    EbitComponent,
    InventoryTurnoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
