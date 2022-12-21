package models

import "github.com/lib/pq"

type Purchase struct {
	Id        string        `json:"ID" gorm:"primary_key"`
	Price     float64       `json:"price"`
	Products  pq.Int64Array `gorm:"type:integer[]"`
	Custurmer string        `json:"custumer"`
}
