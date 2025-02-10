import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  public translate(event: Event){
    console.log(event)
  }
  selectedLanguage: string = 'pt-br';
  selectedIcon: string='../../../../../assets/icons/iconBr.svg';
  changeLanguage(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === 'en') {
      this.selectedIcon = '../../../../../assets/icons/iconEn.svg';
    } else {
      this.selectedIcon = '../../../../../assets/icons/iconBr.svg';
    }
  


  }
  navigateToSection(section: string, event: Event) {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', '/'); // Atualiza a URL sem o hash
  }
}
