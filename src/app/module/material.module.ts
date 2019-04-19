import { NgModule } from '@angular/core';

import { MatButtonModule,
  MatToolbarModule,
   MatIconModule,
   MatSidenavModule, MatListModule, MatAutocompleteModule, MatOptionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const components = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: components,
  exports: components
})

export class MaterialModule {}
