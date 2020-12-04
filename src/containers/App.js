import React,{Component} from 'react';

import Navigation from '../components/Navbar';
import Card from '../components/Card';

const API = process.env.API;

class App extends Component {

    constructor(){
        super()
        this.state = {
            data:[],
            searchTerm:'',
            error:'',
            loading:true
        }
    }

    async componentDidMount(){
        const res = await fetch(`${API}&S=batman`);
        const resJSON = await res.json();
        this.setState({data:resJSON.Search,loading:false});
    }

    async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({error:'Please insert a valid text'})
        }
        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();
        if(!data.Search){
            return this.setState({error:'There are no results'})
        }
        this.setState({data:data.Search,error:'',searchTerm:''});

    }

    render(){
        
        const {data,loading} = this.state;
        if(loading){
            return (<h3 className="text-dark">Loading...</h3>)
        }
        return (
            <div>
                <Navigation/>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="SEARCH MOVIE"
                                onChange={e=>this.setState({searchTerm:e.target.value})}
                                value={this.state.searchTerm}
                                autoFocus
                            />
                        </form>
                        <p className="text-dark my-2">{this.state.error ? this.state.error : ''}</p>
                    </div>
                </div>
                <div className="container my-4">
                    <div className="row">
                        <Card movies={data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;