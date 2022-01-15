import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { ServerStateInterceptor } from './shared/interceptors/server-state.interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  imports: [AppModule, ServerModule, SharedModule, AppRoutingModule, ServerTransferStateModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
  ],
})
export class AppServerModule {}
