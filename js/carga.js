const getAllDrinks= async () => {
    try {

        const respuesta = await fetch(`https://64625b3c7a9eead6facd3d7d.mockapi.io/api/coffee/bebidas`)
        const respuestaJson = await respuesta.json()
        console.log(respuestaJson)


        const { createApp } = Vue
        createApp({
            data() {
                return {
                    bebidas: respuestaJson
                }
            }
        }).mount("#menu")

    } catch (error) { console.log("Hubo un error", error) }
}


getAllDrinks()