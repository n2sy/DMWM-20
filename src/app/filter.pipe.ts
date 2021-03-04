import { Pipe, PipeTransform } from '@angular/core';
import { Serveur } from './model/serveur';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(tab: Serveur[], selectedStatus : string): Serveur[] {
    if(selectedStatus.length == 0)
      return tab;
    else {
      let newServers : Serveur[] = [];
      for (let serv of tab) {
        if(serv["status"] == selectedStatus)
          newServers.push(serv)
      }
      return newServers;
    }
  }

}
