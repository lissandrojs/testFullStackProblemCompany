package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
)

func ProductsRouter(router *gin.Engine) {
	router.GET("/products", controllers.GetProductsController)
	router.POST("/products", controllers.PostProductsController)
	router.DELETE("/products/:id", controllers.DeleteProductsController)
	router.PUT("/products/:id", controllers.UpdateProductsController)
}
