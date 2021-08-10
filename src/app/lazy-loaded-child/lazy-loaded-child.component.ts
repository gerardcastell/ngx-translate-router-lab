import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-child',
  templateUrl: './lazy-loaded-child.component.html',
  styleUrls: ['./lazy-loaded-child.component.scss']
})
export class LazyLoadedChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
