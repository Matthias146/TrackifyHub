import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trackifyhub');
}
