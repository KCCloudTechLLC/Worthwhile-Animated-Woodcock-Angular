import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawa111: string = ' '
  rawypck: string = ' '
  raw7b1a: string = ' '
  raw8flu: string = ' '
  rawiq7c: string = ' '
  raw34ta: string = ' '
  rawguxe: string = ' '
  rawgol2: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('KC Cloud Tech LLC')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'KC Cloud Tech LLC',
      },
    ])
  }
}
