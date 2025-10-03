import { Component } from '@angular/core';
import { PresentesComponent } from './presentes/presentes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,PresentesComponent, CommonModule],
  template: `<app-presentes></app-presentes>`, // 👈 aqui é template
})
export class AppComponent {}
