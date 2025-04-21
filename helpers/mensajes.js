import 'colors'

export const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear()

        console.log('======================='.green)
        console.log(' Seleccione Una Opción '.green)
        console.log('=======================\n'.green)

        console.log(`1. Crear Tarea`)
        console.log(`2. Listar Tareas`)
        console.log(`3. Listar Tareas Completadas`)
        console.log(`4. Listar Tareas Pendientes`)
        console.log(`5. Completar Tarea(s)`)
        console.log(`6. Borrar Tarea`)
        console.log(`0. Salir \n`)


        // Crea un Input para que el usuario ingrese una opción

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione Una Opción: ', (opt) => {
            readline.close()
            resolve(opt)
        })

    })


}

export const pausa = () => {
    
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ENTER para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })
    } )
}
