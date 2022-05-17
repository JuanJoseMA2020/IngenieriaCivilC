import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { FirstformComponent } from './firstform/firstform.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';



const routes: Routes = [
  
  { path: 'firstform', component: FirstformComponent},
  {path: 'secondform', component: SecondformComponent},
  {path:'thirdform', component:ThirdformComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: '**', redirectTo:'/',pathMatch:'full'},
];
  


@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    FirstformComponent,
    SecondformComponent,
    ThirdformComponent,
    ResultadosComponent,
    BibliotecaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
