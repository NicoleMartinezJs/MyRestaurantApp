import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormComponent } from './core/form.component';
import { ModelModule } from './model/model.module';

@NgModule({
  imports: [
    BrowserModule, ModelModule, CoreModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
