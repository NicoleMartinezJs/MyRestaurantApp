import { style } from "@angular/animations";
import { Component } from "@angular/core";
import {NgForm } from "@angular/forms";
import { Model } from "../model/repository.model";
import { Restaurant } from "../model/restaurant.model";


@Component({
  selector: "prForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
})
export class FormComponent {
  minDate: string = "";
  mensaje: string="";
  restaurant: Restaurant = new Restaurant();

  constructor(private model: Model) {}
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    if (form.valid) {
      this.mensaje = "";
      this.model.saveRestaurant(this.restaurant);
      this.formSubmitted = true;
      this.restaurant = new Restaurant();
      form.reset();
    }
    else {
      this.mensaje = "* Los campos son obligatorios";
      this.formSubmitted = false;
    }
  }

  ngOnInit() {
    this.minDate = new Date().toISOString().split('T')[0];
  }
  ObligatoryField() {
    if (this.mensaje.length>0) {
      this.mensaje = "";
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`El campo ${thing} es obligatorio`);
            break;
          case "minlength":
            messages.push(`El ${thing} debe tener al menos
              ${state.errors["minlength"].requiredLength} caracteres`);
            break;
          case "pattern":
            messages.push(`El campo ${thing} no es válido`);
            break;
        }
      }
    }
    return messages;
  }
}

