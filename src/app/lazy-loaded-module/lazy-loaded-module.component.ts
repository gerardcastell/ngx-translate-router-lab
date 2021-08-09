import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-loaded-module',
  templateUrl: './lazy-loaded-module.component.html',
  styleUrls: ['./lazy-loaded-module.component.scss'],
})
export class LazyLoadedModuleComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    this.router.navigate(['/']);
  }
}
