import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterModule],
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
    if (textarea && textarea.value) {
      // Nur die Höhe zurücksetzen, wenn die Zeilenumbruchgrenze erreicht ist
      if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.style.height = 'auto'; // Setze Höhe auf 'auto', um Neuberechnung zu ermöglichen
        textarea.style.height = textarea.scrollHeight + 'px'; // Setze Höhe auf die Scrollhöhe
      }
  
      // Zeige das Häkchen, wenn Text vorhanden ist
      this.showCheckmark = textarea.value.length > 0;
    }
  }
  
  // Funktion, um die Eingabe zu stoppen
 
  http = inject(HttpClient);

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




  post = {
    endPoint: 'https://hasan-korkmaz.de/sendmail.php', 
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };




  
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Überprüfen, ob alle Felder einen Wert haben, bevor sie gesendet werden
      if (this.formData.name && this.formData.email && this.formData.message) {
        this.http.post(this.post.endPoint, this.post.body(this.formData))
          .subscribe({
            next: (response) => {
              form.reset(); // Formular zurücksetzen
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => this.showConfirmation(),
          });
      } else {
        console.error('Alle Felder müssen ausgefüllt sein');
      }
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
