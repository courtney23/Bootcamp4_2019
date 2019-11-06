import React from 'react';
import searchLogo from "./Search.png"


class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value
		this.props.filterUpdate(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		
		return (
			<form class="searchBar">
				<img class="image" src ={searchLogo}  height="42" width ="42"/>
				<input class="image" type="text"
				ref={ (value) => this.myValue = value}
				 placeholder="Type to Filter"
				 onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
