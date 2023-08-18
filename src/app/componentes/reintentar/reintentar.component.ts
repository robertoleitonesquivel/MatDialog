import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Observable, finalize, map, of, retry, switchMap, tap, throwError, pipe, retryWhen, filter, mergeMap, catchError } from 'rxjs';
import { ClientComponent } from '../client/client.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'app-reintentar',
  templateUrl: './reintentar.component.html',
  styleUrls: ['./reintentar.component.scss']
})
export class ReintentarComponent {

  constructor(
    private matDialog: MatDialog
  ) {

  }

  public reintentarEnErrores(): void {

    // of(1).pipe(
    //   switchMap(res => this.hacerAlgo()),
    //   switchMap(res => this.abrir()),
    //   switchMap(res => throwError('Lanze un error')),
    //   retry(),
    //   finalize(() => console.log('finalize'))
    // ).subscribe({
    //   next: (callback) => {
    //     console.log('subcribe', callback);
    //   },
    //   error: (error) => {
    //     console.log('error', error);
    //   }
    // })


    let contador: number = 0;
    of(1).pipe(
      tap(res => contador++),
      switchMap(res => this.hacerAlgo()),
      filter(res => res),
      switchMap(res => this.abrir()),
      filter(res => res),
      switchMap(() => {
        if (contador === 3) {
          return of('todo bien');
        } else {
          return throwError('Lanze un error')
        }
      }),
      retry(),
      tap(res => console.log('segui', res)),
      finalize(() => console.log('finalize'))
    ).subscribe({
      next: (callback) => {
        console.log('subcribe', callback);
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  private hacerAlgo(): Observable<boolean> {
    console.log('Hago halgo');
    // return of('Hice algo').pipe(
    //   switchMap(res => this.abrir1()),
    //   switchMap(res => throwError('Error interno')),
    //   catchError(err => of(false))
    // );

     return of(true);
  }

  private abrir(): Observable<boolean> {
    return this.matDialog.open(ClientComponent, {
      width: '650px',
      height: '800px'
    }).afterClosed().pipe(
      tap(res => console.log('cerre', res))
    );
  }

  private abrir1(): Observable<boolean> {
    return this.matDialog.open(AutocompleteComponent, {
      width: '650px',
      height: '800px'
    }).afterClosed().pipe(
      tap(res => console.log('cerre', res))
    );
  }
}
