import React , {useState} from 'react'
import '../Styles/NuevoUsuario.css'

function dataBase() {

    const sociosDB = [
        {
          nombre: "Marcos Gramajo",
          telefono: 3814675299,
          direccion: "Av. Juan B. Justo 2649"
        },
        {
          nombre: "Isabel Mateos",
          telefono: 3816342952,
          direccion: "Cl. Jordi, 6, Casa 1" ,
          libro: "",
          date: ""
        },
        {
          nombre: "Maria Piedad Caamaño",
          telefono: 3815606219,
          direccion: "Vereda Ordoñez, 488, Piso 49" ,
          libro: "",
          date: ""
        },
        {
          nombre: "Jose Alejandro Borrego",
          telefono: 3813418914,
          direccion: "Cl. Patricia Márquez, Apto 83" ,
          libro: "",
          date: ""
        },
        {
          nombre: "Roman Rivera",
          telefono: 3815875313,
          direccion: "Cl. Carbajal, Apto 69" ,
          libro: "",
          date: ""
        }
      ]

    if(localStorage.getItem("socio")){
        console.log("existe")
    }

    else{
        localStorage.setItem("socios", JSON.stringify(sociosDB))
    }

    
    }