import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, scan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private startTime = new Date();

  private initialData = [
    { key: '1', value: new Date() },
    { key: '2', value: new Date() },
    { key: '3', value: new Date() },
    { key: '4', value: new Date() },
  ];

  appRunningFor$ = interval(1000).pipe(
    map(() => new Date().getTime() - this.startTime.getTime())
  );

  data$ = interval(1000).pipe(
    scan((data) => {
      data.forEach((row) => (row.value = new Date()));
      return [...data];
    }, this.initialData)
  );
}
