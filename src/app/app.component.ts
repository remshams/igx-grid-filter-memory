import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, scan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'igx-grid-memory';
  private startTime = new Date();

  initialData = [
    { key: '1', value: interval(1000).pipe(map(() => new Date())) },
    { key: '2', value: interval(1000).pipe(map(() => new Date())) },
    { key: '3', value: interval(1000).pipe(map(() => new Date())) },
    { key: '4', value: interval(1000).pipe(map(() => new Date())) },
  ];

  appRunningFor$ = interval(1000).pipe(
    map(() => new Date().getTime() - this.startTime.getTime())
  );
}
