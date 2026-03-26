import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VARIANTS, VariantData } from './bubbles.data';

@Component({
  selector: 'app-bubbles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubbles.component.html',
  styleUrl: './bubbles.component.scss'
})
export class BubblesComponent implements OnInit, OnDestroy {
  @Input() theme: 'white' | 'black' = 'black';
  
  currentIndex = 0;
  variants: VariantData[] = VARIANTS;
  private timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.variants.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  get currentVariant() {
    return this.variants[this.currentIndex];
  }

  getLeft(left: number | string): string {
    return typeof left === 'number' ? left + 'px' : left;
  }

  getTop(top: number | string): string {
    return typeof top === 'number' ? top + 'px' : top;
  }
}
