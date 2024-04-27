import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ServerComponent } from './server/server.component';
import { BlueprintComponent } from './blueprint/blueprint.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ServerComponent,
    BlueprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
