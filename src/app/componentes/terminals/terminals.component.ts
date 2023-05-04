import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTerminalComponent } from './modalTerminal/add-terminal/add-terminal.component';
import { TerminalsService } from 'src/app/services/terminals.service';
import { filter, map, of, pipe, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent {

  constructor(
    public dialog: MatDialog,
    private terminalsSVC: TerminalsService
  ) {

  }

  openDialog(): void {

    let x = 2;

    const dialogRef = this.dialog.open(AddTerminalComponent, {
      width: '250px'
    });

    this.terminalsSVC.getData().pipe(
      take(1),
      tap((res) => {
        dialogRef.componentInstance.data = res;
      })
    ).subscribe();

    dialogRef
      .afterClosed()
      .pipe(
        filter(res => {
          if (res && x === 1)
            return true;
          else if (res && x === 2)
            return true;
          else
            return false;
        }),
        switchMap((res) => {
          if (x === 1)
            return this.terminalsSVC.getDataLis();
          else
            return this.terminalsSVC.getDataLis();
        }),
        switchMap(res => this.terminalsSVC.getDataLis()),
        tap(res => {
          console.log(res)
        })
      ).subscribe({
        next: () => {
        },
        error: (err: any) => {
          console.log(err)
        }
      });

    // this.terminalsSVC.getData().pipe(
    //   switchMap(res => {
    //     if (x === 1) {
    //       dialogRef.componentInstance.data = null;
    //     } else {
    //       dialogRef.componentInstance.data = res;
    //     }
    //     return dialogRef.afterClosed();
    //   }),
    //   filter(res => res),
    //   switchMap(res => this.terminalsSVC.getDataLis())
    // ).subscribe(result => {
    //   console.log(result);
    // });

  }

}

