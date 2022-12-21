package services

import (
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type jwtStruct struct {
	secretKey string
	issure    string
}

func NewJwtAutentication() *jwtStruct {
	return &jwtStruct{
		secretKey: "lissandro-new-developer-problem-company",
		issure:    "service-api",
	}
}

type Claim struct {
	Sum uint `json:"sum"`
	jwt.StandardClaims
}

func (s *jwtStruct) GenarateToken(id uint) (string, error) {
	claim := &Claim{
		id,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 2).Unix(),
			Issuer:    s.issure,
			IssuedAt:  time.Now().Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claim)

	t, err := token.SignedString([]byte(s.secretKey))

	if err != nil {
		return "", err
	}
	return t, nil
}

func (s *jwtStruct) ValidateTokenJwt(token string) bool {

	_, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		if _, isValid := t.Method.(*jwt.SigningMethodHMAC); !isValid {
			return nil, fmt.Errorf("invalis toke")
		}
		return []byte(s.secretKey), nil
	})

	return err == nil
}
