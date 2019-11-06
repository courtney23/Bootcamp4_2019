import React from 'react';
import RemoveBuilding from './RemoveBuilding';


//<li>{buildingInfo.coordinates.latitude}</li>
//<li>{buildingInfo.coordinates.longitude}</li>
class ViewBuilding extends React.Component {
	render() {
		const {data, id} = this.props;
		const buildingInfo = data
		.filter(directory => {
			return(
				directory.id === id
			)
			
		})[0]
		
		
		let text = ' '
		if(!buildingInfo){
			text =
			<p>
			{' '}
			<i>Click on a name to view more information</i>
		
		</p>
		}
		else{
			text =
			<tr>
				<h4>Building Info</h4>
				<p variant="body1">
				Name: {buildingInfo.name}<br />
				Code: {buildingInfo.code}<br />
				Address: {buildingInfo.address}<br />
				</p>
				<RemoveBuilding 
				id={id}
				removeBuilding={this.props.removeBuilding}
			/>
			</tr>
		}
		return (
			<div>
				{text}
			</div>	
		);
	}
}
export default ViewBuilding;
