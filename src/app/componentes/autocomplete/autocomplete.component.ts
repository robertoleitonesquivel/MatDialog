import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  items = ['Pedro', 'Juan', 'Natalaia', 'Roberto', 'Jocelyn', 'Esteban', 'Karen', 'Ana'];
  items$!: Observable<string[]>;

  subject$ = new Subject<string>();
  desuscribir$ = new Subject<string>();

  constructor(
    private matDialog: MatDialogRef<AutocompleteComponent>
  ){}

  ngOnInit(): void {

    // console.log(this.items.filter(x => x.includes('')));

    // this.items$ = this.subject$.pipe(
    //   debounceTime(15),
    //   distinctUntilChanged(),
    //   map(res => this.items.filter(x => x.includes(res)))
    // )

    // this.frm.valueChanges.pipe(
    //   filter(res => {
    //     if (res) return true;
    //     else return false;
    //   }),
    //   tap(res => this.subject$.next(res ?? '')),
    //   takeUntil(this.desuscribir$)
    // ).subscribe({});
  }


  frm = new FormControl('');

  select(_data: string): void {
    console.log(_data, 'select');
    this.frm.reset();
    this.subject$.next('');
  }

  public completeMethod(): void {
    // this.desuscribir$.next('');
    // this.desuscribir$.complete();
    this.subject$.next('');
    this.subject$.complete();
  }

  public keyupMethod(): void {
    this.subject$.next(this.frm.value ?? '');
  }


  public Aceptar(): void {
    this.matDialog.close(true);
  }

  public Cerrar(): void {
    this.matDialog.close(false);
  }

}
