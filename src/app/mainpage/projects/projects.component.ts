import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  // Hover-Status für das "Join"-Element
  isHoveredJoin: boolean = false;
  // Hover-Status für das "El Pollo Loco"-Element
  isHoveredPollo: boolean = false;

  // Methoden für "Join"
  onMouseEnterJoin() {
    this.isHoveredJoin = true;
  }

  onMouseLeaveJoin() {
    this.isHoveredJoin = false;
  }

  // Methoden für "El Pollo Loco"
  onMouseEnterPollo() {
    this.isHoveredPollo = true;
  }

  onMouseLeavePollo() {
    this.isHoveredPollo = false;
  }
}
