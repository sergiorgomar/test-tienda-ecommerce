import server from "./server";
import { startDBConnection } from "./connection";

//load env variables
import { config } from 'dotenv';
config();


//ConexiÓn a base de datos y creación de modelos
startDBConnection();


//Iniciar el servidor
const PORT = process.env.BACKEND_PORT;
if(PORT){
    server.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  } else {
    throw new Error('Fallo al ejecutar la aplicación backend, puerto no definido. Revise sus variables de entorno.');
}
  