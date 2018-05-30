import { Component, OnInit } from '@angular/core';

import { RadioOption } from './../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartao de Debito", value: "DEB"},
    {label: "Cartao Refeicao", value: "REF"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
