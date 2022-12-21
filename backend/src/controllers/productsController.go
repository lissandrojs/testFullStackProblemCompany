package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
)

func GetProductsController(ctx *gin.Context) {

	products := []models.Product{}
	config.DB.Find(&products)
	ctx.JSON(200, &products)
}

func PostProductsController(ctx *gin.Context) {

	var product models.Product
	ctx.BindJSON(&product)
	config.DB.Create(&product)
	ctx.JSON(201, product)
}

func DeleteProductsController(ctx *gin.Context) {
	var product models.Product

	config.DB.Where("id =?", ctx.Param("id")).Delete(&product)
	ctx.JSON(200, &product)
}

func UpdateProductsController(ctx *gin.Context) {

	var product models.Product
	config.DB.Where("id=?", ctx.Param("id")).First(&product)
	ctx.BindJSON(&product)
	config.DB.Save(&product)
	ctx.JSON(200, &product)
}
