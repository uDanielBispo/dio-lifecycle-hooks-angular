import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']

})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = "daniel";

  //nascimento do componente
  constructor() {
    console.log(`Constructor() ${this.nome}`);
  }

  //função void - quando iniciado fazer algo:
  ngOnInit(): void {
    this.nome = this.nome + "X";
    console.log(`OnInit() ${this.nome}`);

  }

  ngOnChanges(): void{
  console.log(`onChanges() ${this.nome}`);
  }



}
