import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list'; // Material para lista
import {MatDividerModule} from '@angular/material/divider'; //Material para uma linha de dividir

import {MatFormFieldModule} from '@angular/material/form-field'; //Material do form
import {MatInputModule} from '@angular/material/input';  //Material do Input

@NgModule({
  declarations: [],

  imports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule],

  exports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule]

})
export class AngularMaterialModule { }
