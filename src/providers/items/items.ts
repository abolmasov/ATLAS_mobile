
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';



@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {

    return this.api.get('transactions/months', params);
  }

  uip(params?: any) {

    return this.api.get('uip_info', params);
  }

  accounts(params?: any) {

    return this.api.get('banks/accounts/', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
