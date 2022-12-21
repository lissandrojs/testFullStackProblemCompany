package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Id    int    `json:"ID" gorm:"primary_key"`
	Name  string `json:"name"`
	Price string `json:"price"`
}
