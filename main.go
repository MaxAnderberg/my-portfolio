package main

import (
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// main is the entry point of the program.
func main() {
	fmt.Println("Hello World")
	e := echo.New()
	e.Use(middleware.Logger())
	e.GET("/", hello)
	e.Logger.Fatal(e.Start(":1323"))
}

func hello(c echo.Context) error {

	return c.String(200, "Hello World")
}
