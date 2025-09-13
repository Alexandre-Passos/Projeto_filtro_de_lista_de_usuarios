import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list'; // Material para lista
import { MatDividerModule } from '@angular/material/divider'; //Material para uma linha de dividir

import { MatFormFieldModule } from '@angular/material/form-field'; //Material do form
import { MatInputModule } from '@angular/material/input';  //Material do Input


import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatSelectModule } from '@angular/material/select'; //Material do select
import { CommonModule } from '@angular/common'; //Módulo comum do angular

import {MatButtonModule} from '@angular/material/button'; //Material do botão

import {MatTableModule} from '@angular/material/table'; //Material tabela

@NgModule({
  declarations: [],

  imports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, CommonModule, MatButtonModule, MatTableModule],

  exports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, CommonModule, MatButtonModule, MatTableModule]

})
export class AngularMaterialModule { }
