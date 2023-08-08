import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalsService {

  constructor(private http: HttpClient) { }


  public getData(): Observable<any> {
    return of({ Id: '1', Nombre: 'Roberto' });
  }

  public getDataLis(): Observable<any> {
    return of([{ Id: '1', Nombre: 'Roberto' }]);
  }

  public get(file: File):Observable<any> {
debugger
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>('https://localhost:7033/api/Values?whsCode=01', formData);
  }

}
