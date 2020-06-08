import React,{Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import {setSearchField} from '../action'


class App extends Component {

	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		// console.log(this.props.store.getState())
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users})
		})
		
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const {robots,searchfield} = this.state
		const filteredRobots =robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		if (!robots.length){
			return <h1>Loadinng</h1>
		} else{
		 	return (
				<div className='tc'>
					<h1 className='f2'>Robofriends</h1>
					<SearchBox searchChange= {this.onSearchChange} />
					<Scroll>	
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			) 
	
		}
	}				
	
}
export default App





