package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
)

func GetUsersController(ctx *gin.Context) {

	users := []models.User{}
	config.DB.Find(&users)
	ctx.JSON(200, &users)
}

func PostUsersController(ctx *gin.Context) {
	var user models.User
	ctx.BindJSON(&user)
	config.DB.Create(&user)
	ctx.JSON(201, user)
}

func DeleteusersController(ctx *gin.Context) {
	var users models.User

	config.DB.Where("id =?", ctx.Param("id")).Delete(&users)
	ctx.JSON(200, &users)
}

func UpdateusersController(ctx *gin.Context) {

	var users models.User
	config.DB.Where("id=?", ctx.Param("id")).First(&users)
	ctx.BindJSON(&users)
	config.DB.Save(&users)
	ctx.JSON(200, &users)
}
