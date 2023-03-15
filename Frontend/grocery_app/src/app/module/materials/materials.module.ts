import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSortModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSortModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class MaterialsModule { }
