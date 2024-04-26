import { Sequelize } from 'sequelize';

// Crear una instancia de Sequelize
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' // Nombre del archivo de la base de datos
});

import UserModel from './models/user.model';
import TokenModel from './models/token.model';
import ProductModel from './models/product.model';

export const startDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        // Define todos los modelos que deseas sincronizar con la base de datos
        const models = [TokenModel, UserModel, ProductModel];
        // Sincroniza todos los modelos con la base de datos
        for (const model of models) {
            await model.sync({ force: true });
            console.log(`Modelo ${model.name} sincronizado`);
        }

        //Datos iniciales
        const createdUser = await UserModel.create({
            name: "Juan",
            phone: "5543203940",
            img_profile: "",
        });
        await TokenModel.create({
            user_id: createdUser.dataValues.id,
              token: process.env.AUTH_TOKEN,
        });


        await ProductModel.create({
            name: "Audifonos sony",
            img_url: "https://http2.mlstatic.com/D_NQ_NP_2X_668028-MLA73371283053_122023-F.webp",
            price: 2190,
            height: 2,
            length: 3,
            width: 12,
        });
        await ProductModel.create({
            name: "Playera Maruchan",
            img_url: "https://http2.mlstatic.com/D_NQ_NP_786795-MLM54922817542_042023-F.webp",
            price: 200,
            height: 2,
            length: 12,
            width: 56,
        });
        await ProductModel.create({
            name: "Teléfono celular",
            img_url: "https://http2.mlstatic.com/D_Q_NP_932404-CBT69548404884_052023-W.webp",
            price: 2305,
            height: 2,
            length: 12,
            width: 56,
        });
        await ProductModel.create({
            name: "Crema para imperfecciones",
            img_url: "https://http2.mlstatic.com/D_Q_NP_943633-MLU72271382015_102023-W.webp",
            price: 205,
            height: 2,
            length: 12,
            width: 56,
        });
        await ProductModel.create({
            name: "Mesa plegable",
            img_url: "https://http2.mlstatic.com/D_Q_NP_760876-MLU75210332008_032024-W.webp",
            price: 779,
            height: 2,
            length: 1.20,
            width: 1.20,
        });
        await ProductModel.create({
            name: "Mini figura de among us",
            img_url: "https://http2.mlstatic.com/D_NQ_NP_643802-MLM52733492522_122022-O.webp",
            price: 299,
            height: 0.4,
            length: 12,
            width: 12,
        });

        await ProductModel.create({
            name: "Hidrolavadora eléctrica",
            img_url: "https://http2.mlstatic.com/D_NQ_NP_850884-MLU75257977956_032024-O.webp",
            price: 1049,
            height: 8.4,
            length: 1.2,
            width: 0.6,
        });


        


       /*  await sequelize.sync({ force: true }); // Esta línea elimina y recrea la tabla en cada ejecución
        console.log("Base de datos sincronizada"); */

        
    } catch (error) {
       throw new Error(`Error de conexión a la base de datos: ${error}`);
    }
};


