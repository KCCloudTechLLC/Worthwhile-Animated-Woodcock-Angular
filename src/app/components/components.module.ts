import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { FeatureCard3 } from './feature-card3/feature-card3.component'

@NgModule({
  declarations: [NavigationLinks, FeatureCard3],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, FeatureCard3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
