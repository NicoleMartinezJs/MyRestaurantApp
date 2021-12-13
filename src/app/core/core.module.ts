import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormComponent } from "./form.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [FormComponent],
  exports: [FormComponent, ModelModule]

})

export class CoreModule { }


