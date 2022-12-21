package config

import (
	"crypto/sha256"
	"fmt"
)

func Sha256hash(value string) string {

	str := sha256.Sum256([]byte(value))

	return fmt.Sprintf("%x", str)
}
