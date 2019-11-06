import React from 'react';
import addLogo from './plus.png';

class AddBuilding extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			code: '',
			address: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleCodeChange = this.handleCodeChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(event){
		this.setState({name: event.target.value});
	}
	handleCodeChange(event){
		this.setState({code: event.target.value});
	}
	handleAddressChange(event){
		this.setState({address: event.target.value});
	}

	handleSubmit(event){
		//alert('A name was submitted: ' + this.state.name);
		event.preventDefault();
		if (this.state.name === ''){
			alert("missing name entry");
		}
		
		if(this.state.code === ''){
			alert("missing code entry");
		}
		if(this.state.address === ''){
			alert("missing address entry");
		}

		this.props.data.push(this.state);

	}

	render() {
		//const{addBuilding} = this.props;
		return (
		<form onSubmit={this.handleSubmit}>
			<h2>Add Building</h2>
			<label>
				Building Name:
				<textarea type="text" name="name"
				onChange={this.handleNameChange} />
			</label>
			<br />
			<label>
				Building Code:
				<textarea type="text" name="code"
				onChange={this.handleCodeChange} />
			 </label>
			<br />
			<br />
			<label>
				Address:
				<textarea type="text" name="address"
				onChange={this.handleAddressChange} />
			</label>
			<br />
			<input type="image" src={addLogo} size = "30" width="30" alt="add"/>
		</form>
		);
	}
}
export default AddBuilding;