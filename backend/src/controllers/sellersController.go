package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
)

func GetSellersController(ctx *gin.Context) {

	sellers := []models.Seller{}
	config.DB.Find(&sellers)
	ctx.JSON(200, &sellers)
}

func PostSellersController(ctx *gin.Context) {

	var sellers models.Seller
	ctx.BindJSON(&sellers)
	config.DB.Create(&sellers)
	ctx.JSON(201, sellers)
}

func DeleteSellersController(ctx *gin.Context) {
	var sellers models.Seller

	config.DB.Where("id =?", ctx.Param("id")).Delete(&sellers)
	ctx.JSON(200, &sellers)
}

func UpdateSellersController(ctx *gin.Context) {

	var sellers models.Seller
	config.DB.Where("id=?", ctx.Param("id")).First(&sellers)
	ctx.BindJSON(&sellers)
	config.DB.Save(&sellers)
	ctx.JSON(200, &sellers)
}
