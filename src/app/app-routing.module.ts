import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';
import { CursoComponent } from './pages/curso/curso.component';
import { BusquedasComponent } from './pages/busquedas/busquedas.component';

const routes:Routes=[

  {path: 'home', component:HomeComponent},
  {path: 'tutoriales', component:TutorialesComponent},
  {path: 'busquedas', component:BusquedasComponent},
  {path: 'curso/:id', component:CursoComponent},


  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'**', pathMatch:'full', redirectTo:'/home'}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
