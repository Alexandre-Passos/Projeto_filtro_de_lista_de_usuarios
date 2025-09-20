import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users.-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto_filtro_de_lista_de_usuarios';

  userList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  listaUsuario: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.userList = UserList;
    }, 2000)

  };


  receberUsuario(user: IUser) {
    this.userSelected = user
    this.listaUsuario = true
  }

  receberFiltro(filtro: IFilterOptions) {
    console.log(filtro)
  }
}
