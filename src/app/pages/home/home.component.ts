import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw25ou: string = ' '
  raw6f3b: string = ' '
  rawvf6o: string = ' '
  rawhyc1: string = ' '
  rawqhxl: string = ' '
  rawpd65: string = ' '
  rawqtzo: string = ' '
  rawl445: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Worthwhile Animated Woodcock')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Worthwhile Animated Woodcock',
      },
    ])
  }
}
