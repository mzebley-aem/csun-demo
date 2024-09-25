import { Component } from '@angular/core';
import * as USWDS from '@uswds/uswds/js';
const { accordion, password, table } = USWDS;
import { AccessibilityOptions, DisplayType, ModuleTypes } from 'aem-accessibility-center';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss'],
})
export class KitchenSinkComponent {
  ngAfterViewInit() {
    console.log(USWDS);
    accordion.on(document.body);
    password.on(document.body);
    table.on(document.body);
  }

  title = 'Accessibility Center Demo';
  description = 'This is a demo of the Accessibility Center component';

  options: AccessibilityOptions = {
    displayType: 'panel',
    position: 'end',
    overlay: true,
    include: ['fontSize', 'theme', 'spacing', 'layout']
  };

  resetOptions(): void {
    this.options = {
      displayType: 'panel',
      position: 'end',
      overlay: true,
      include: ['fontSize', 'theme', 'spacing', 'layout']
    };
    this.options = { ...this.options };
  }

  onDisplayTypeChange(value: DisplayType): void {
    this.options.displayType = value;
    this.options = { ...this.options };
  }

  onDisplayPositionChange(value: 'start' | 'end'): void {
    this.options.position = value;
    this.options = { ...this.options };
  }

  onOverlayChange(value: boolean): void {
    this.options.overlay = value;
    this.options = { ...this.options };
  }

  onCheckboxChange(event: any, module: ModuleTypes): void {
    if (event.target.checked) {
      // Add the module to the included array
      if (!this.options.include?.includes(module)) {
        this.options.include?.push(module);
      }
    } else {
      // Remove the module from the included array
      this.options.include = this.options.include?.filter(m => m !== module);
    }
    this.options = { ...this.options };
  }

}
