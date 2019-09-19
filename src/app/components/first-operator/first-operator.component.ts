import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.scss']
})
export class FirstOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000);
    this.newObservable$ = this.sourceObservable$.pipe(first(i => i > 3));
  }
}
