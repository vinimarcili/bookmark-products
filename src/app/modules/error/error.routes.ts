import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ListCampaignsPageComponent,
  //     },
  //   ],
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
