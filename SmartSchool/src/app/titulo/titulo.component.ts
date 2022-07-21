import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  // Now it behaves like a parameter that can receive something 
  @Input() titulo: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
