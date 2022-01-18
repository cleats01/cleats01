let str = `
010-2979-7178
cleats02@naver.com
https://naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g)
)