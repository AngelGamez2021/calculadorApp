import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';

const routes: Routes = [
  {path: '', component: DispositivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
