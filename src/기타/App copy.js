// import Food from "./Food";
// import Macaron from "./Macaron";
// //마카롱 js에서 마카롱컴포넌트를 불러와야함
// import cakes from "./cakes.json";

// function App() {
//   return (
//     //자식이 두개일때는 부모요소가 있어야한다 div로 묶을필요없는데 묶어줘야할때 그냥 빈요소로묶어줌. class는 사용불가 <></>
//     <>
//     <div className="App">"안녕하세요!!"</div>
//     {cakes.map(cake => ( 
//     //cake.json에서 map 메소드로 cakes 배열에서 객체를 하나하나 가져와서 props 형태로 macaron.js에 보내준다
//           <Macaron 
//             propsid={cake.id} //cake 컴포넌트 > Macaron 부모 컴포넌트 > 자식 컴포넌트에게 객체 속성값을 props형태로 저장해서 내보내기- 택배상자 안에 속성값을 넣어서 보내는 것 {객체.속성값}
//             propsname={cake.name}
//             propsimage={cake.images}
//           />
//     ))}
//     </>
//   );
// }
// export default App;

// import React, { Component } from 'react'


// export class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor 함수는 클래스형 컴포넌트가 생성할 때 호출됨")
//   }

//   componentDidMount() {
//     console.log("componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수")
//     //영화 api 불러오기
//   }

//   componentDidUpdate() {
//     console.log("componentDidUp함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수이다.")
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수")
//   }

//   state = { //컴포넌트 상태값을 저장하고 변경할 수 있는 데이터 - App 컴포넌트의 상태
//     count: 0,
//     sum: 0,
//     avg: 0,
//   }

//   add = () => {
//     console.log("더하기");
//     // this.state.count = 1;
//     this.setState({count: this.state.count + 1});
//   }
  
//   minus = () => {
//     console.log("빼기");
//     // this.state.count = -1;
//     // this.setState({count: this.state.count - 1});
//     this.setState(current => ( //current는 this.state
//       {
//         count: current.count -1,
//         sum: current.sum -2,
//         avg: current.avg -3,
//       }
//     ))
//   }

//   render() {
//     const {count,sum,avg} = this.state;  //구조분해할당 App component의 상태(위의 state)
//     return (
//       <>
//         <div>App</div>
//         <div>
//           <h1>현재 숫자는 {count} 입니다</h1>
//           <button onClick={this.add}>더하기</button>
//           <button onClick={this.minus}>빼기</button>
//         </div>
//         <Food />
//       </>
//     )
//   }
// }

// export default App


