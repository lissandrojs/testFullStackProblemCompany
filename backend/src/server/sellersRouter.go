package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/services/middlewares"
)

func SellersRouter(router *gin.Engine) {
	router.GET("/sellers", controllers.GetSellersController, middlewares.Auth())
	router.POST("/sellers", controllers.PostSellersController, middlewares.Auth())
	router.DELETE("/sellers/:id", controllers.DeleteSellersController, middlewares.Auth())
	router.PUT("/sellers/:id", controllers.UpdateSellersController, middlewares.Auth())
	router.POST("sellers/login", controllers.PostLoginSellerController)
}
