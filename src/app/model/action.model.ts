import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Action {
    id: string;
    nome: string;
    percentual: number;

    constructor(id: string, nome: string, percentual: number) { 
        this.id = id;
        this.nome = nome;
        this.percentual = percentual;
    }

    static asFormGroup(action: Action): FormGroup {
        const fg = new FormGroup({
          id: new FormControl(action.id, Validators.required),
          nome: new FormControl(action.nome, Validators.required),
          percentual: new FormControl(action.percentual, Validators.required)
        });

        return fg;
      }
}