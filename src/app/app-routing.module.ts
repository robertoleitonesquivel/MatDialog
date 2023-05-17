import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalsComponent } from './componentes/terminals/terminals.component';
import { ClientComponent } from './componentes/client/client.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

const routes: Routes = [
  {
    path: '',
    component: TerminalsComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'tabla',
    component: TablaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
