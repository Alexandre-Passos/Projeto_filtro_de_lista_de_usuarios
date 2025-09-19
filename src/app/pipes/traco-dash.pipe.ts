import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tracoDash'
})
export class TracoDashPipe implements PipeTransform {

  transform(valor_recebido: any): any {

    const INVALIDO_VALOR = valor_recebido === undefined || valor_recebido === null || valor_recebido === '';
    if (INVALIDO_VALOR) {
      return '-';
    }
    return valor_recebido;
  }

}
