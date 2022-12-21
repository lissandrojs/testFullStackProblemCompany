package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/services/middlewares"
)

func ProductsRouter(router *gin.Engine) {
	router.GET("/products", controllers.GetProductsController)
	router.POST("/products", controllers.PostProductsController, middlewares.Auth())
	router.DELETE("/products/:id", controllers.DeleteProductsController, middlewares.Auth())
	router.PUT("/products/:id", controllers.UpdateProductsController, middlewares.Auth())
}
