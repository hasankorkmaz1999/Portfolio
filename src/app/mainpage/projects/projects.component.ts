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

 
  activeProject: string | null = null;

  
  projects: string[] = ['Join', 'El Pollo Loco', 'Portfolio'];
  currentProjectIndex: number = 0; 

  
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

  
  openModal(project: string) {
    this.isModalOpen = true;
    this.activeProject = project;
    this.currentProjectIndex = this.projects.indexOf(project); 
    document.body.style.overflow = 'hidden'; 
  }

  
  closeModal() {
    this.isModalOpen = false;
    this.activeProject = null;
    document.body.style.overflow = 'auto'; 
  }

  closeModalOnBackground(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

   
    if (clickedElement.classList.contains('modal')) {
      this.closeModal();
    }
  }

 
  nextProject() {
 
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.activeProject = this.projects[this.currentProjectIndex];
  }
}
