import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Services/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  public formUsuario: FormGroup;

  constructor(
  public usuarioService: UsuarioService,
  public formbuilder: FormBuilder,
  public router: Router

  ) { 
    this.formUsuario = this.formbuilder.group({
      name: [''],
      email: [''],
      telefono: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuarioService.nuevoUsuario(this.formUsuario.value);
    this.router.navigate(['usuarios']);
  }

}
