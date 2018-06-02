import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../restaurants-detail/shopping-cart/cart.item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem

  @Output() increseQty = new EventEmitter<CartItem>()
  @Output() decreseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }s

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem) {
    this.decreseQty.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }
}
