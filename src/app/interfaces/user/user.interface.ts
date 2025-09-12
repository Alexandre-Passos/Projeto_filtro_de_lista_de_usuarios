import { IAddress } from "./addres.interface"
import { IStatus } from "./status.interface"

export interface IUser {
    nome: string
    email: string
    senha: string
    endereco: IAddress
    telefone: string
    ativo: boolean
    funcao: string
    datacadastro: string
    status: IStatus
}