import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesComponent } from './bubbles/bubbles.component';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BubblesComponent, TuiButtonModule, TuiRootModule],
  template: `
    <tui-root>
      <div class="min-h-screen bg-neutral-900 flex flex-col items-center py-12 px-4 gap-8">
        <div class="max-w-4xl w-full flex flex-col gap-8">
          <div class="flex justify-between items-center bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-2xl">
            <div>
              <h1 class="text-3xl font-black italic tracking-tighter text-white mb-1">Social Circles</h1>
              <p class="text-[#8A38F5] text-sm font-mono uppercase tracking-widest">Animated Step-by-Step</p>
            </div>
            <button
              tuiButton
              type="button"
              appearance="secondary"
              class="rounded-full shadow-[0_0_20px_rgba(138,56,245,0.4)]"
              [style.backgroundColor]="'#8A38F5'"
              [style.color]="'white'"
              (click)="toggleTheme()"
            >
              {{ theme === 'white' ? 'Dark' : 'Light' }} Mode
            </button>
          </div>

          <div class="flex justify-center">
            <app-bubbles [theme]="theme"></app-bubbles>
          </div>

          <footer class="mt-4 text-center">
            <p class="text-neutral-600 text-[10px] uppercase tracking-[0.5em]">© 2026 Social Project Web App • Tcell Style</p>
          </footer>
        </div>
      </div>
    </tui-root>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  theme: 'white' | 'black' = 'black';

  toggleTheme() {
    this.theme = this.theme === 'white' ? 'black' : 'white';
  }
}
