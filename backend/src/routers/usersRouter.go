package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
)

func UsersRouter(router *gin.Engine) {
	router.GET("/", controllers.UsersController)
}
