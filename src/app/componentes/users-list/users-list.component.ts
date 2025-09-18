import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from 'src/app/data/users.-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  userList: IUser[] = UserList;

  displayedColumns: string[] = ["ID", "nome", "date", "status"];

  elementoSelecionado(usuario: IUser) {
    console.log(usuario);
  }
}
