import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operaciones =[
    {nombre:'Selecciona una opción'},
    {valor:'suma',nombre:"sumar"},
    {valor:'resta',nombre:"restar"},
    {valor:'multiplicacion',nombre:"multiplicar"},
    {valor:'divicion',nombre:"dividir"}
  ]

  titulo = 'Calculadora';
  operandoA!: number;
  operandoB!: number;
  resultado!: number;
  selectOption!:String;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar():void{
    this.resultado = this.operandoA - this.operandoB;
  }

  onMultiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }

  onDividir():void{
    this.resultado = this.operandoA / this.operandoB;
  }

}
