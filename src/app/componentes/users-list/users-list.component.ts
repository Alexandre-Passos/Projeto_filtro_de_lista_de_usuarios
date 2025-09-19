import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from 'src/app/data/users.-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  displayedColumns: string[] = ["ID", "nome", "date", "status"];


  @Input({required: true}) userList: IUser[] = [];
  
  @Output("usuarioEmitter") usuarioEmitter = new EventEmitter<IUser>()

  elementoSelecionado(usuario: IUser) {
    console.log(usuario);

    this.usuarioEmitter.emit(usuario)
  }
}
