import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
//import RemoveBuilding from './components/RemoveBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    }
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  removeBuilding(id) {
    //filter to only have the current state only have id's that aren't the id that needs to be removed
     this.setState({
       data: this.state.data
       .filter(dir => {return dir.id !== id})
      })

  }

  
  addBuilding(){
    //alert("add building " + name);
    var newData = this.state.data;
    //newData.push=({id: newData[newData.length-1].id+1, code: code, name:name})
    this.setState({
      data: newData
    })
  }
  

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        //filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data ={this.state.data}
              id={this.state.selectedBuilding}  
              removeBuilding={this.removeBuilding.bind(this)}   
              />
              <AddBuilding
              addBuilding={this.addBuilding.bind(this)}
              data={this.state.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
