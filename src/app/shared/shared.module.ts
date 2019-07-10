import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';

import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const modules = [
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule];

@NgModule({
  declarations: [NotFoundComponent, ConfirmationDialogComponent],
  imports: [...modules],
  exports: [...modules, NotFoundComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule {
}
