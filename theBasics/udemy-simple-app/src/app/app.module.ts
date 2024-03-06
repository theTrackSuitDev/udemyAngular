import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule } from '@angular/forms';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskDirectivesComponent } from './task-directives/task-directives.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { SuccessAlertComponent } from './task-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './task-one/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    TaskTwoComponent,
    TaskDirectivesComponent,
    TaskOneComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
