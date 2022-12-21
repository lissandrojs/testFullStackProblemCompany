package middlewares

import (
	"github.com/gin-gonic/gin"
	"github.com/lissandrojs/testFullStackProblemCompany/backend/src/services"
)

func Auth() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		const Bearer_schema = "Bearer "
		header := ctx.GetHeader("Authorization")

		if header == "" {
			ctx.JSON(401, gin.H{
				"error": "make sure you are authenticated with Bearer token and broker token",
			})
		}

		token := header[len(Bearer_schema):]

		if !services.NewJwtAutentication().ValidateTokenJwt(token) {
			ctx.JSON(401, gin.H{
				"error": "make sure you have the necessary credentials for this action",
			})
		}
	}
}
