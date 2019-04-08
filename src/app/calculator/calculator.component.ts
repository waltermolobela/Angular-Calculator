import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  current:any;
  constructor() { 
    this.current='';
  }

  @Output() myNewEvent = new EventEmitter();

  calculate(value){   
    if(value == 'C'){
      this.current='0';
    }
    else if(value == '='){
      this.current = eval(this.current);
    }
    else{
      if(this.current=='0'){
        this.current=value;
      }
      else{
      this.current=this.current+value;
    }
    }    
    this.myNewEvent.emit(this.current);   
  }

  ngOnInit() {
  }

}
