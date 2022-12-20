package controllers

import (
	"github.com/gin-gonic/gin"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/configs"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
)

func UsersController(ctx *gin.Context) {

	users := []models.User{}
	config.DB.Find(&users)
	ctx.JSON(200, &users)
}
