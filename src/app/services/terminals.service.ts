import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalsService {

  constructor() { }


  public getData(): Observable<any> {
    return of({ Id: '1', Nombre: 'Roberto' });
  }

  public getDataLis(): Observable<any> {
    return of([{ Id: '1', Nombre: 'Roberto' }]);
  }
}
