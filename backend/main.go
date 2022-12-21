package main

import (
	"github.com/gin-gonic/gin"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
	routes "github.com/lissandrojs/testFullStackProblemCompany/backend/src/server"
)

func main() {

	router := gin.New()
	routes.UsersRouter((router))
	routes.ProductsRouter((router))
	config.Connect()
	router.Run(":8081")
}
