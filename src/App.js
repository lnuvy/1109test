// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import Dic from './Dictionary';


class App extends Component {
  // 생성자 함수
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      dics: []
    }
  }

  // 컴포넌트 생성될때 호출
  componentDidMount() {
    const BASE_URL = 'https://dictionary-f.herokuapp.com/api/words'
    console.log('뜨니?')
    fetch(BASE_URL)
    .then( res => res.json())
    .then( result => {
      console.log(result + "!!!!!!!!!!!!!!!!!!!")
      const {words} = result

      const asdf = {words: "r_word"}
      console.log(asdf.toString + "!!!!!!!!!!!!!!!")
      this.setState({loading: false, dics : words}) // 여기
    })
  }


  render() {
    const { loading, dics } = this.state

    if(loading) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      )
    } else {
      return (
        <div>
          {dics.map(dic => {
            return (
              <Dic
              key={dic._id}
              r_word={dic.r_word}
              r_seq={dic.r_seq}
              r_pos={dic.r_pos}
              r_hanja={dic.r_hanja}
              r_des={dic.r_des}
              r_link={dic.r_link}>
              </Dic>
            )
          })}
        </div>
      )
    }


  }
} export default App;














/*
// count 연습

class App extends Component {
  state = {
    count: 0
  }

  showUI = (cnt) => {
    let ui = null;
    switch(cnt%4) {
      case 0:
        ui = <h1>11111</h1>
        break;
      case 1:
        ui = <h1>22222</h1>
        break;
      case 2:
        ui = <h1>33333</h1>
        break;
      default:        
        ui = <h1>44444</h1> 
    }
    console.log(cnt)
    return ui
  }
  increase = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    const { count } = this.state
    return (
      <>
        {this.showUI(count)}
        <button type="button" onClick={this.increase}>카운팅</button>
      </>
    )
  }
}

*/