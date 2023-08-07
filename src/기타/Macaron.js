// Macaron.js

//클래스형 컴포넌트 rce(render 함수 있음)
// import { Component } from "react"

//상위 클래스에서 내용을 상속받아야함 (Component라는 클래스의 컴포넌트에서 내용을 Macaron에 상속받아 사용)
// export class Macaron extends Component {
//     render() {
//         return (
//             <div>Macaron</div>
//         )
//     }
// }
// export default Macaron


//함수형 컴포넌트 rfce(render 함수 없음)
import React from 'react'

// App.js에서 보낸 택배를 매개변수로 받기..
function Macaron({propsname, propsid, propsimage}) { //구조분해할당
  // const {propsname, propsid, propsimage} = props; 
  return (
    <div>
        <h1>No. {propsid}</h1>
        <h2>Name: {propsname}</h2>
        <img src={propsimage} alt={propsname} width={200} height={300} />
    </div>
  )
}

export default Macaron

