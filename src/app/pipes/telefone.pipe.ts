import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {

    const INVALIDO_TELEFONE = !telefone || telefone.length < 11 || telefone.length > 11;

    if (INVALIDO_TELEFONE) {
      return "Telefone indisponivel ou inválido"
    }

    if (telefone.length === 11) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`
     
    }else{
       return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`
    }

  }

}
