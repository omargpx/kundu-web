import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  mediaSub:Subscription;

  constructor(public mediaObserver:MediaObserver){}

  ngOnInit(): void {
    AOS.init();
  }

  ngOnDestroy(): void {

  }
}
