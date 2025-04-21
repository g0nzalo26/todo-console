import 'colors';

import { inquirerMenu, pausa, leerInput, listadoBorrarTareas, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';



const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
    }

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':

                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc)

                break

            case '2':

                tareas.listadoCompleto()

                break

            case '3':

                tareas.listarPendientesCompletadas()

                break

            case '4':

                tareas.listarPendientesCompletadas(false)

                break

            case '5':

                const ids = await mostrarListadoChecklist( tareas.listadoArr )
                
                tareas.cambioEstados( ids )


                break

            case '6':

                const id = await listadoBorrarTareas(tareas.listadoArr)

                if (id !== '0') {

                    const ok = await confirmar('¿Está Seguro?')

                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log('Tarea Borrada Correctamente!!!')
                    }
                }

                break

        }

        guardarDB(tareas.listadoArr)

        await pausa()

    } while (opt !== '0');

}

main()