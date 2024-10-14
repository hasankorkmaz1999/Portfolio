import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-abovethefold',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './abovethefold.component.html',
  styleUrl: './abovethefold.component.scss'
})
export class AbovethefoldComponent {

}
