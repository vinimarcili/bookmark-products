import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
    runGuardsAndResolvers: 'always',
  },
  {
    path: '**',
    redirectTo: '/error/not-found',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'corrected',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
