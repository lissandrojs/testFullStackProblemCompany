package config

import (
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=modesti password=1234 dbname=modesti port=45432"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&models.User{}, &models.Product{}, &models.Seller{}, &models.Login{})
	DB = db
}
