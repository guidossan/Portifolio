import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navigateToSection(section: string, event: Event) {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', '/'); // Atualiza a URL sem o hash
  }
}
