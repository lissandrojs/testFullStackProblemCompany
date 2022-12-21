package models

import "gorm.io/gorm"

type Seller struct {
	gorm.Model
	Id        int    `json:"ID" gorm:"primary_key"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	Type      string `json:"type"`
	Password  string `json:"password"`
}
