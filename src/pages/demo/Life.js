import React from 'react'     /**import 报错，写少了字母 */
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
         <div style={{padding:100}}>
            <p>reactshengming</p>
            <button onClick={this.handleAdd}>dianji</button>
            <button onClick={this.handleAdd.bind(this)}>dianji</button>
            <p>{this.state.count}</p>
        </div>
        )
    }

}

