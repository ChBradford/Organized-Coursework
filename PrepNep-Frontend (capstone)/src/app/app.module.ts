import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SnackBarComponent } from './snack-bar/snack-bar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { 
  MatButtonModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
import { LevelSetComponent } from './level-set/level-set.component'
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';
import { OutputSetComponent } from './output-set/output-set.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    LevelSetComponent,
    VariableSetComponent,
    TimeSetComponent,
    GridSetComponent,
    OutputSetComponent,
    ConfirmationComponent
  ],
  entryComponents: [
    SnackBarComponent,
    LevelSetComponent,
    TimeSetComponent,
    VariableSetComponent,
    GridSetComponent,
    OutputSetComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill'} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
