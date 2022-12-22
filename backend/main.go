package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
	routes "github.com/lissandrojs/testFullStackProblemCompany/backend/src/server"
)

func main() {

	router := gin.New()

	router.Use(cors.New(cors.Config{
		AllowMethods:     []string{"GET", "POST", "OPTIONS", "PUT"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "User-Agent", "Referrer", "Host", "Token"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowAllOrigins:  false,
		AllowOriginFunc:  func(origin string) bool { return true },
		MaxAge:           86400,
	}))

	routes.UsersRouter((router))
	routes.ProductsRouter((router))
	routes.SellersRouter((router))
	config.Connect()
	router.Run(":8081")
}
