import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
  selectedFeature: string;

  switchView(selectedFeature: string) {
    if (this.selectedFeature?.toUpperCase() !== selectedFeature.toUpperCase()) {
      this.selectedFeature = selectedFeature;
    }
  }
}
