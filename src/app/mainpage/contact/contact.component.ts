import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  showCheckmark: boolean = false; // Zustand für die Sichtbarkeit des Häkchens
  isInputStopped: boolean = false; // Zustand, ob die Eingabe gestoppt wurde

  // Funktion, um das textarea automatisch zu vergrößern
  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea) {
      // Nur die Höhe zurücksetzen, wenn die Zeilenumbruchgrenze erreicht ist
      if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.style.height = 'auto'; // Setze Höhe auf 'auto', um Neuberechnung zu ermöglichen
        textarea.style.height = textarea.scrollHeight + 'px'; // Setze Höhe auf die Scrollhöhe
      }

      // Zeige das Häkchen, wenn Text vorhanden ist
      this.showCheckmark = textarea.value.trim().length > 0;
    }
  }

  // Funktion, um die Eingabe zu stoppen
  stopInput(): void {
    this.isInputStopped = true;
    this.showCheckmark = false; // Verstecke das Häkchen, wenn die Eingabe gestoppt wird
  }
}
