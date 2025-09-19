import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonePipe } from './telefone.pipe';
import { EnderecoPipe } from './endereco.pipe';
import { StatusPipe } from './status.pipe';
import { TracoDashPipe } from './traco-dash.pipe';



@NgModule({
  declarations: [TelefonePipe, EnderecoPipe, StatusPipe, TracoDashPipe],

  imports: [CommonModule],

  exports: [TelefonePipe, EnderecoPipe, StatusPipe, TracoDashPipe]
  
})
export class PipesModule { }
