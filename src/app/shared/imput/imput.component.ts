import { Component, Input, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';


@Component({
  selector: 'mt-imput-container',
  templateUrl: './imput.component.html',
  styleUrls: ['./imput.component.css']
})
export class ImputComponent implements OnInit, AfterContentInit {

  imput: any
  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.imput = this.model || this.control
    if(this.imput === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(): boolean{
    return this.imput.valid && (this.imput.dirty || this.imput.touched);
  }

  hasError(): boolean {
    return this.imput.invalid && (this.imput.dirty || this.imput.touched);
  }

}
