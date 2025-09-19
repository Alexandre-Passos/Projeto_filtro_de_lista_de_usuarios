import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALIDO_STATUS = status === null || status === undefined;

    if (INVALIDO_STATUS) {
      return "Status indisponivel ou inválido"
    }

    return status ? "Ativo" : "Inativo"
  }

}
