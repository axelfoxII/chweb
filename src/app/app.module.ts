import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';
import { BusquedasComponent } from './pages/busquedas/busquedas.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CursoComponent } from './pages/curso/curso.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { RecomendadosComponent } from './pages/recomendados/recomendados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { VistasComponent } from './pages/vistas/vistas.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialesComponent,
    BusquedasComponent,
    NavbarComponent,
    CursoComponent,
    DomSeguroPipe,
    FooterComponent,
    RecomendadosComponent,
    VistasComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
