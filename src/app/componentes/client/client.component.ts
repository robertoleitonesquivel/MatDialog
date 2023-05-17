import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter, finalize, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.navegacion();
  }

  private navegacion(): void {
    this.activatedRoute.queryParamMap.pipe(
      filter(res => res.has('prueba')),
      map(res => res.get('prueba')),
      take(1),
      finalize(() => console.log('finalize'))
    ).subscribe({
      next: (res) => {
        console.log(res, 'subcribe')
      },
      error: (err) => {
        console.log(err,'error')
      }
    })
  }
}
