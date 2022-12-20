package main

import (
	"github.com/gin-gonic/gin"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/configs"
	routes "github.com/lissandrojs/testFullStackProblemCompany/backend/src/routers"
)

func main() {

	router := gin.New()
	routes.UsersRouter((router))
	config.Connect()
	router.Run(":8081")
}
