import { Component } from '@angular/core';
import { TranslateModule} from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  translate = inject(TranslationService);

}
