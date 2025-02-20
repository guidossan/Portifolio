import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,TranslateModule],
  template: `
    <router-outlet />
    `,
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Meu Portfólio Angular');
    this.metaService.addTags([
      { name: 'description', content: 'Este é o meu portfólio desenvolvido em Angular.' },
      { name: 'author', content: 'Guilherme Martins dos Santos Lorenzini' },
      { name: 'keywords', content: 'Criar aplicações web, Portifólio de programador web, Programador web, Programador full-stack, Desenvolvedor web, Desenvolvedor full-stack, Contratar desenvolvedor, Desenvolvedor para projetos web' }
    ]);
  }
}
