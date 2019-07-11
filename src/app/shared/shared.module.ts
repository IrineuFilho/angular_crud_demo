import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
} from '@angular/material';

import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {LoaderComponent} from './loader/loader.component';
import {NgxLoadingModule} from 'ngx-loading';
import {NgxMaskModule} from 'ngx-mask';

const modules = [
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  NgxLoadingModule,
  NgxMaskModule
];

@NgModule({
  declarations: [NotFoundComponent, ConfirmationDialogComponent, LoaderComponent],
  imports: [...modules],
  exports: [...modules, NotFoundComponent, LoaderComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule {
}
