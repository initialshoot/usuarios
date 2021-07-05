import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  Usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  eliminarUsuario = usuario => this.usuarioService.eliminarUsuario(usuario);

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.Usuarios = res.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Usuario
        } 
      });
    });
  }

}
