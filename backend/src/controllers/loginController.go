package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
	config "github.com/lissandrojs/testFullStackProblemCompany/backend/src/schema"
	services "github.com/lissandrojs/testFullStackProblemCompany/backend/src/services"
)

func PostLoginSellerController(ctx *gin.Context) {

	var login models.Login
	ctx.BindJSON(&login)

	var seller models.Seller

	dbError := config.DB.Where("email = ?", login.Email).First(&seller).Error

	if dbError != nil {
		ctx.JSON(400, gin.H{
			"error": "Invalid user or password",
		})
		return
	}

	if seller.Password != config.Sha256hash(login.Password) {
		ctx.JSON(400, gin.H{
			"error": "Invalid user or password",
		})
		return
	}

	tokenJwt, err := services.NewJwtAutentication().GenarateToken(uint(seller.Id))

	if err != nil {
		ctx.JSON(400, gin.H{
			"error": "Invalid user or password",
		})
		return
	}
	ctx.JSON(200, gin.H{
		"token": tokenJwt,
	})
}
