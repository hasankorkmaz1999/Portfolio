import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isHoveredJoin: boolean = false;
  isHoveredPollo: boolean = false;
  isModalOpen: boolean = false;

  // Variable, um das aktuelle Projekt zu speichern
  activeProject: string | null = null;

  // Methoden für Hover-Effekte
  onMouseEnterJoin() {
    this.isHoveredJoin = true;
  }

  onMouseLeaveJoin() {
    this.isHoveredJoin = false;
  }

  onMouseEnterPollo() {
    this.isHoveredPollo = true;
  }

  onMouseLeavePollo() {
    this.isHoveredPollo = false;
  }

  // Öffnet das Modal und setzt das aktive Projekt
  openModal(project: string) {
    this.isModalOpen = true;
    this.activeProject = project;
    document.body.style.overflow = 'hidden'; // Scrollen verhindern
  }

  // Schließt das Modal und setzt das aktive Projekt zurück
  closeModal() {
    this.isModalOpen = false;
    this.activeProject = null;
    document.body.style.overflow = 'auto'; // Scrollen wieder aktivieren
  }

  closeModalOnBackground(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    // Überprüfen, ob der Klick auf den Modal-Hintergrund erfolgt ist
    if (clickedElement.classList.contains('modal')) {
      this.closeModal();
    }
  }
}
