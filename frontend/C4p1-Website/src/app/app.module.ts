import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { MainComponent } from './views/main/main.component';
import { SidebarButtonComponent } from './general/sidebar-button/sidebar-button.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { FooterComponent } from './general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SidebarButtonComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    SidebarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
