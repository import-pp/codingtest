package main

import "fmt"

func countAndSay(n int) string {
	if n == 1 {
			return "1"
	}
	return recur("1", 1, n)
}


func recur(str string, n int, k int) string {
	if n == k {
			return str
	}
	i := 0
	var output string
	for i < len(str) {
			current := string(str[i])
			count := 0
			for i < len(str) && string(str[i]) == current  {
					i++
					count ++
			}
			output += fmt.Sprint(count) + current
	}
	return recur(output, n+1, k)
}
