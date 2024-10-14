import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  translate = inject(TranslationService);

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
 

  formData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  // Zustände, um zu prüfen, ob die Felder validiert wurden
  nameChecked = false;
  emailChecked = false;
  messageChecked = false;

  validateInput(control: any): void {
    if (control.name === 'name') {
      this.nameChecked = true;
    }
    if (control.name === 'email') {
      this.emailChecked = true;
    }
    if (control.name === 'message') {
      this.messageChecked = true;
    }
  }

  confirmationVisible = false; // Zustand für die Bestätigungsmeldung


  onSubmit(form: any) {
    if (form.valid) {
      // Hier kannst du die Logik zum Senden des Formulars hinzufügen

      // Zeige die Bestätigungsmeldung an
      this.showConfirmation();
    }
  }

  showConfirmation() {
    this.confirmationVisible = true;

    // Verstecke die Nachricht nach 3 Sekunden wieder
    setTimeout(() => {
      this.confirmationVisible = false;
    }, 3000);
  }
 
}
