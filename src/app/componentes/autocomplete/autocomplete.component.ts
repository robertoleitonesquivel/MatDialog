import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, filter, map, takeUntil, tap } from 'rxjs';

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

  ngOnInit(): void {

    this.items$ = this.subject$.pipe(
      tap(res => console.log(res, 'subject')),
      map(res => this.items.filter(x => x.includes(res)))
    )

    // this.frm.valueChanges.pipe(
    //   filter(res => {
    //     if (res) return true;
    //     else return false;
    //   }),
    //   tap(res => console.log(res, 'form')),
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

}
