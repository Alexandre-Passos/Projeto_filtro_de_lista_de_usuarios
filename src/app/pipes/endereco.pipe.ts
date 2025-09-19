import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/addres.interface';

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

  transform(endereco: IAddress): string {
    const INVALIDO_ENDERECO =
      !endereco ||
      !endereco.rua ||
      !endereco.cidade ||
      !endereco.estado ||
      !endereco.numero === null || endereco.numero === undefined;

    if (INVALIDO_ENDERECO) {
      return "Endereço indisponivel ou inválido"
    }
    return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`
  }

}
