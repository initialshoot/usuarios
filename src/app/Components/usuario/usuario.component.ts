import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public formEditar: FormGroup;
  usuarioRef: any;

  constructor(
    public usuarioService: UsuarioService,
    public formBuilder: FormBuilder,
    public rutaActual: ActivatedRoute,
    private router: Router
  ) { 
    this.formEditar = this.formBuilder.group({
      nombre:[''],
      email:[''],
      telefono:['']
    });
  }

  ngOnInit(): void {

  const id = this.rutaActual.snapshot.paramMap.get('id');

  this.usuarioService.getUsuario(id).subscribe(res => {
    this.usuarioRef = res;
    this.formEditar = this.formBuilder.group({
      nombre:[this.usuarioRef.nombre],
      email:[this.usuarioRef.email],
      telefono: [this.usuarioRef.telefono]
    })
  });

  }

  onSubmit(){
    const id = this.rutaActual.snapshot.paramMap.get('id');

    this.usuarioService.actualizarUsuario(this.formEditar.value, id);
    this.router.navigate(['usuarios']);
  }

}
