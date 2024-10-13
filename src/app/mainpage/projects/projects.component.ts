import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  translate = inject(TranslationService);


  isHoveredJoin: boolean = false;
  isHoveredPollo: boolean = false;
  isHoveredPortfolio: boolean = false;
  isModalOpen: boolean = false;

  // Variable, um das aktuelle Projekt zu speichern
  activeProject: string | null = null;

  // Liste der Projekte in einer Schleife
  projects: string[] = ['Join', 'El Pollo Loco', 'Portfolio'];
  currentProjectIndex: number = 0; // Um den aktuellen Index zu speichern

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

  onMouseEnterPortfolio() {
    this.isHoveredPortfolio = true;
  }

  onMouseLeavePortfolio() {
    this.isHoveredPortfolio = false;
  }

  // Öffnet das Modal und setzt das aktive Projekt
  openModal(project: string) {
    this.isModalOpen = true;
    this.activeProject = project;
    this.currentProjectIndex = this.projects.indexOf(project); // Setzt den Index des Projekts
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

  // Zyklische Navigation durch die Projekte (nächstes Projekt)
  nextProject() {
    // Inkrementiere den Index und setze ihn wieder auf 0, wenn das Ende der Liste erreicht wird
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.activeProject = this.projects[this.currentProjectIndex]; // Setzt das nächste Projekt
  }
}
