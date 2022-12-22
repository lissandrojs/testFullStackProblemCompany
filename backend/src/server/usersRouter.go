package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/controllers"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/services/middlewares"
)

func UsersRouter(router *gin.Engine) {
	router.GET("/users", controllers.GetUsersController, middlewares.Auth())
	router.POST("/users", controllers.PostUsersController)
	router.DELETE("/users/:id", controllers.DeleteUsersController, middlewares.Auth())
	router.PUT("/users/:id", controllers.UpdateUsersController, middlewares.Auth())
	router.POST("/users/login", controllers.PostLoginCustumerController)
}
