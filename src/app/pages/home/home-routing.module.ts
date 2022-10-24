import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GolManagementComponent } from './gol-management/gol-management.component';
import { ListComponent } from './gol-management/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'goles',
        loadChildren: () =>
          import('./gol-management/gol-routing.module').then(
            (m) => m.GolRoutingModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./user-management/users-routing.module').then(
            (u) => u.UsersRoutingModule
          ),
      },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
