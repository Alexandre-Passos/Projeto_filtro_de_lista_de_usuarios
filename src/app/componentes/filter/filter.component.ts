import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filterOptions: IFilterOptions = {
    nome: undefined,
    startDate: undefined,
    endDate: undefined,
    status: false
  };

  statusList = [{
    "descricao": "Ativo",
    "valor": true
  }, {
    "descricao": "Inativo",
    "valor": false
  }]

@Output("OnFilterEmitter") onFilterEmitter = new EventEmitter<IFilterOptions>();


  onFilter() {
    this.onFilterEmitter.emit(this.filterOptions);
  }

}
