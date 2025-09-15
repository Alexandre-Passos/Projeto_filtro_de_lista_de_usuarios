import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users.-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto_filtro_de_lista_de_usuarios';
  userSelected: IUser = UserList[5];
}
