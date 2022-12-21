package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
)

func SellersRouter(router *gin.Engine) {
	router.GET("/sellers", controllers.GetSellersController)
	router.POST("/sellers", controllers.PostSellersController)
	router.DELETE("/sellers/:id", controllers.DeleteSellersController)
	router.PUT("/sellers/:id", controllers.UpdateSellersController)
	router.POST("sellers/login", controllers.PostLoginSellerController)
}
