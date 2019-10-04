import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule,  NgbRatingModule, NgbAccordionModule, NgbButtonsModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  exports: [
    CommonModule,
    NgbRatingModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbButtonsModule,
    NgbCollapseModule
  ]
})
export class MaterialModule {}
