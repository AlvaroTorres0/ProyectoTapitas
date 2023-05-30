import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPrincipalComponent } from './components/container-principal/container-principal.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  {path:'', component: HeroComponent},
  {path:'container', component: ContainerPrincipalComponent},
  {path: 'home', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
