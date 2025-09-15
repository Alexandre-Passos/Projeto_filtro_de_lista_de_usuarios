import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input({ required: true, alias: 'usuario' }) usuario: IUser = {} as IUser;

}
