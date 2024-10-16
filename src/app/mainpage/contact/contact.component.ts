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

  showCheckmark: boolean = false; 
  isInputStopped: boolean = false; 

  
  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea && textarea.value) {
      
      if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px'; 
      }
  
      
      this.showCheckmark = textarea.value.length > 0;
    }
  }
  
  
 
  http = inject(HttpClient);

  formData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  
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

  confirmationVisible = false; 




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
     
      if (this.formData.name && this.formData.email && this.formData.message) {
        this.http.post(this.post.endPoint, this.post.body(this.formData))
          .subscribe({
            next: (response) => {
              form.reset(); 
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

    
    setTimeout(() => {
      this.confirmationVisible = false;
    }, 3000);
  }
 
}
