const email = "codecamp@gmail.com"
// undefined
email
// 'codecamp@gmail.com'
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// 'codecamp'
back
// 'gmail.com'
front[0]
// 'c'
front[1]
// 'o'
const newFront = []
// undefined
// newFront.pust(front[0]) 오타 pust -> push
// VM1236:1 Uncaught TypeError: newFront.pust is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM1236:1
// newFront.pust(front[1])
// VM1312:1 Uncaught TypeError: newFront.pust is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM1312:1
// newFront.pust[2])
// VM1365:1 Uncaught SyntaxError: Unexpected token ')'
newFront.push(front[0])
// 1
newFront.push(front[1])
// 2
newFront.push(front[3])
// 3 잘못 넣음
newFront.push(front[4])
// 4 잘못 넣음
newFront.push(front[2])
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront.join("") 
// 'coecd***'
newFront.join("") + "@" + back
// 'coecd***@gmail.com'
const result = newFront.join("") + "@" + back
// undefined
result
// 'coecd***@gmail.com'