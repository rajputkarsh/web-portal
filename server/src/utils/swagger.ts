
import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";



export const addSwagger = (app: Express) => {

  const options = {
    definition: {
      swagger: "2.0",
      openapi: "3.1.0",
      info: {
        title: "Wep Portal APIs",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Web-Portal",
          url: `${process.env.BASE_URL}:${process.env.PORT}`,
          email: "r.utkarsh.0010@gmail.com",
        },
      },
      servers: [
        {
          url: `${process.env.BASE_URL}:${process.env.PORT}`,
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);  

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );  
}