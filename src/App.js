import React, {Component} from "react"
import './style.css';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            inputsearch:'',
            flowers:[
                {id:1,
                name:'Aconite',
                image:'flower/1.jpg'},
                {id:2,
                name:'African Daisy',
                image:'flower/2.jpg'},
                {id:3,
                name:'Bee Balm',
                image:'flower/3.jpg'},
                {id:4,
                name:'Coreopsis',
                image:'flower/4.jpg'},
                {id:5,
                name:'Crown Imperial',
                image:'flower/5.jpg'},
                {id:6,
                name:'Daffodil',
                image:'flower/6.jpg'},
                {id:7,
                name:'Poppy',
                image:'flower/7.jpg'},
                {id:8,
                name:'Sage',
                image:'flower/8.jpg'},
                {id:9,
                name:'Scilla',
                image:'flower/9.jpg'},
                {id:10,
                name:'Sunflower',
                image:'flower/10.jpg'}
                
           ]
        }
    }
    render(){
        const filter =this.state.flowers.filter((text)=>{
            return(
               text.name.toLowerCase().includes(this.state.inputsearch.toLowerCase()))
            })
        return(  
          <div className="boxes">
                <input placeholder='Search here.....' className="input" value={this.state.inputsearch} onChange={(e) =>{
                 this.setState({inputsearch:e.target.value})
                 }}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
              <div className="box">
                     {
                      filter.map((item) => {
                      return(
                      <div className={item.id} id="card">
                      <div><img className="image" src ={item.image}/></div>
                      <div><h2>{item.name}</h2></div>
                      </div> )}
                       )
                     }
             </div> 
         </div>   
        
        )
    }
}
export default App;