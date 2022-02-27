import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import type { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; // Input sirve para decirle a Angular que un componente hijo va a recibir una propiedad de un componente padre. Osea que product es una propiedad de ProductAlertsComponent que proviene de ProductListComponent.
  @Output() notify = new EventEmitter(); // Output es lo contrario a Input, ya que este hace lo mismo pero a la inversa, osea que le dice que la propiedad notify va a ser enviada al componente padre.
  constructor() {}

  ngOnInit(): void {}
}
