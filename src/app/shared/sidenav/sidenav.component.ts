import { Component, OnInit } from '@angular/core';
import * as materialize from "materialize-css";
declare const M;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var options;
      var elems:any = document.querySelectorAll('.sidenav');
      var instances:any = M.Sidenav.init(elems, options);
    });

  }
  

}
