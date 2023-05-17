const getInfoAsync = async (id) => {
    try {
        
        const respuesta = await fetch(`https://64625b3c7a9eead6facd3d7d.mockapi.io/api/coffee/bebidas/${id}`)
        const respuestaJson = await respuesta.json()

        console.log(respuestaJson)

        const { createApp} = Vue
        createApp({
            data() {
                return {
                    name: respuestaJson.name,
                    imageUrl: respuestaJson.imageUrl,
                    ingredients: respuestaJson.ingredients,
                    details: respuestaJson.details
                }
            }
        }).mount("#api")

    } catch (error) { console.log("Hubo un error", error) }
}

getInfoAsync(2)









