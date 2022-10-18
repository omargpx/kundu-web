import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
  },
  { path: '**', redirectTo: 'auth' },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'home/**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}), ComponentsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
