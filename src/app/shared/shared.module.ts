import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  imports: [],
  providers: []
})
export class SharedModule {}
