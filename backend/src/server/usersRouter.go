package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
)

func UsersRouter(router *gin.Engine) {
	router.GET("/users", controllers.GetUsersController)
	router.POST("/users", controllers.PostUsersController)
	router.DELETE("/users/:id", controllers.DeleteUsersController)
	router.PUT("/users/:id", controllers.UpdateUsersController)
}
