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
  isHoveredPollo: boolean = false;

  // Status des modalen Fensters
  isModalOpen: boolean = false;

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

  // Methode, um das Modal zu öffnen
  openModal() {
    this.isModalOpen = true;
  }

  // Methode, um das Modal zu schließen
  closeModal() {
    this.isModalOpen = false;
  }
}
