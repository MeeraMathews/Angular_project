import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
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
import { PagesComponent } from './pages/pages.component';
import { ApplicationsComponent } from './applications/applications.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

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
    PagesComponent,
    ApplicationsComponent,
    UiComponentsComponent,
    WidgetsComponent,
    FormsComponent,
    ChartsComponent,
    // CollapseModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    NgApexchartsModule,
    [TooltipModule.forRoot()],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
