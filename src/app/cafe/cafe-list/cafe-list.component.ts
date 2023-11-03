import { Component, OnInit } from '@angular/core';
import { CafeListService } from './cafe-list.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalCafeBlend: number = 0;
  totalCafeOrigen: number = 0;
  constructor(private cafesService: CafeListService) {}

  ngOnInit() {
    this.getCafes();
  }

  getCafes(): void {
    this.cafesService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.totalCafeBlend = cafes.filter(item=> item.tipo === 'Blend').length;
      this.totalCafeOrigen = cafes.filter(item=> item.tipo === 'Café de Origen').length
    });
  }

}
