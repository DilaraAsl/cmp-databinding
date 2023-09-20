import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated// None remove encapsulation, ShadowDom works only on browsers that support shadow dom
})
export class ServerElementComponent implements OnInit {
  //srvElement is the alias we want to use the alias outside in app-component
//    object shape
@Input('srvElement') element: {type:string, name:string, content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
