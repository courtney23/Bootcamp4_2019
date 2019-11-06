import React from 'react';
import deleteLogo from './delete.png';

class RemoveBuilding extends React.Component {

	render() {
		const {removeBuilding, id, data} = this.props;
		const buildingInfo = data
	/*	.filter(directory => {
			return(
				directory.id === id
				
			)
			
		})[0]
*/
		//alert("directory id is " + id);
		return (
			<div>

				<input type ="image" src={deleteLogo} size = "20" width="20" onClick={() => removeBuilding(id)} />

			
			</div>	
		);
	}
}
export default RemoveBuilding;