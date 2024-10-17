import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss']
})
export class DispositivoComponent {

  displayValue = '';      // El valor que se muestra en la pantalla
  currentValue = '';      // El número actual
  previousValue = '';     // El número previo antes de seleccionar una operación
  operation = '';         // Operación actual (+, -, *, /)
  isDarkMode = false;

  constructor() { }

  // Añadir un número al display
  appendNumber(number: string) {
    this.displayValue += number;
    this.currentValue += number;
  }
  // Asignar operación
  setOperation(operation: string) {
    if (this.currentValue === '') return; // No permitir operaciones sin un valor
    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = '';
    this.displayValue += ` ${operation} `;
  }
  clear() {
    this.displayValue = '';
    this.currentValue = '';
    this.previousValue = '';
    this.operation = '';
  }
  compute() {
    let result: number;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    this.displayValue = result.toString();
    this.currentValue = result.toString();
    this.operation = '';
    this.previousValue = '';
  } 
}
