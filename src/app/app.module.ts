import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminalsComponent } from './componentes/terminals/terminals.component';
import { AddTerminalComponent } from './componentes/terminals/modalTerminal/add-terminal/add-terminal.component';
import { MaterialModule } from './shared/material.module';
import { ClientComponent } from './componentes/client/client.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalsComponent,
    AddTerminalComponent,
    ClientComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
