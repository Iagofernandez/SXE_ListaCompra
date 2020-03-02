import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { PRODUCTOS_ARRAY } from  '../ClasesTypeScript/produtosArrayLista';
import {Productos} from '../ClasesTypeScript/productos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  selectedProducto: Productos;

  constructor() { }
  productosA = PRODUCTOS_ARRAY;
  ngOnInit() {
  }
    onSelect(producto: Productos): void {
      this.selectedProducto = producto;
  }

}
