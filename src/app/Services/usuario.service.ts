import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afs: AngularFirestore) { }

  getUsuario(id:any){
    return this.afs  
                .collection('usuarios')
                .doc(id)
                .valueChanges()
  }

  getUsuarios() {
    return this.afs  
                .collection('usuarios')
                .snapshotChanges();
  }


  nuevoUsuario(usuario:Usuario){
    return new Promise<any>((resolve, reject)=>{
      this.afs
          .collection('usuarios')
          .add(usuario)
          .then(response => {
            console.log(response)
          },
            error => reject(error)
          );
    })
  }

  eliminarUsuario(usuario:any) {
    return this.afs  
                .collection('usuarios')
                .doc(usuario.id)
                .delete();
  }

  actualizarUsuario(usuario: Usuario, id:any){
    return this.afs
                .collection('usuarios')
                .doc(id)
                .update({
                  nombre: usuario.nombre,
                  email: usuario.email,
                  telefono:usuario.telefono
                });
  }
}
