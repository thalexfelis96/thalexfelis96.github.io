import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InfoComponent } from './info/info.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    PresentationComponent,
    InfoComponent,
    HabilidadesComponent,
    FormComponent,
    FooterComponent,
    AppMainPageComponent,
    CatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
