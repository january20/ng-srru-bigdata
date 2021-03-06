import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioRoutingModule } from './bio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { BioService } from './shared/bio.service';

import { PlantsComponent } from './plants/plants.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalFormComponent } from './animals/animal-form/animal-form.component';
import { PlantFormComponent } from './plants/plant-form/plant-form.component';
import { ShowComponent } from './show/show.component';

import { environment } from 'src/environments/environment';
import { PlantShowComponent } from './plants/plant-show/plant-show.component';
import { AnimalShowComponent } from './animals/animal-show/animal-show.component';

@NgModule({
  declarations: [ PlantsComponent, AnimalsComponent, AnimalFormComponent, PlantFormComponent, ShowComponent, PlantShowComponent, AnimalShowComponent ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmap_api_key
    }),
    AgmJsMarkerClustererModule,
    BioRoutingModule,
    SharedModule,
    NgxDropzoneModule
  ],
  providers: [
    BioService
  ]
})

export class BioModule { }
