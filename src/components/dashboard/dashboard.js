// react imports
import React, { Component } from 'react';
import PlanetHelper from '../../helpers/planet-helper';

// style imports
import './dashboard.css';

class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      isLoading: false,
      listOfPlanets: [],
      filteredListOfPlanets: [],
      currentPage: 1,
      availablePageCount: 1,
      searchText: ""
    };
    this.populatePlanetsTable = this.populatePlanetsTable.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeahandlePageChangerch = this.handlePageChange.bind(this);
    this.updateSearchText = this.updateSearchText.bind(this);
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
    this.handleSearchRequestEnterKeyPressed = this.handleSearchRequestEnterKeyPressed.bind(this);
  }

  componentDidMount() {
    this.populatePlanetsTable();
  }

  populatePlanetsTable() {
    PlanetHelper
    .fetchAll(this.state.currentPage)
    .then((res) => {
      this.setState({
        listOfPlanets: [...res.results],
        filteredListOfPlanets: [...res.results],
        availablePageCount: (res.count / 10) + 1
      });
    })
    .catch(err => {
      debugger;
      console.warn(err);
    })
    .finally(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  handleSearch(event) {
    event.preventDefault();
    alert("handling search");
    return false;
  }

  handlePageChange(currentPage) {
    this.setState({
      currentPage: currentPage
    });
    this.populatePlanetsTable();
  }

  updateSearchText(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSearchRequest() {
    let searchText = this.state.searchText.toLowerCase();
    let filteredListOfPlanets = this.state.listOfPlanets.filter((planet) => {
      return (
        planet.name.toLowerCase().includes(searchText) ||
        planet.population.toLowerCase().includes(searchText) ||
        planet.terrain.toLowerCase().includes(searchText) ||
        planet.climate.toLowerCase().includes(searchText) ||
        planet.gravity.toLowerCase().includes(searchText) ||
        planet.edited.toLowerCase().includes(searchText));
    });

    this.setState({
      filteredListOfPlanets: filteredListOfPlanets
    })
  }

  handleSearchRequestEnterKeyPressed(event) {
    if (event.key === "Enter") {
      this.handleSearchRequest();
    }
  }

  render() {

    const {isLoading, currentPage, availablePageCount, searchText, filteredListOfPlanets} = this.state;

    let dynamicPaginationButtons = [];
    for (var i = 1; i < availablePageCount; i++) {
      dynamicPaginationButtons.push(
        <li class={`page-item ${currentPage === i ? 'active' : ""}`} key={i}>
          <a class="page-link" onClick={() => this.handlePageChange(i)}>{i}</a>
        </li>
      );
    }

    return (
      <div class="container-fluid dashboard-wrapper">
        <div class="row pb-3">
          <div class="col-sm-3 offset-sm-1">
            <p class="text-left font-weight-bold">List of Planets: </p>
          </div>
          <div class="col-sm-3 offset-sm-4">
            <div class="input-group mb-3">
              <input type="text"
                value={searchText}
                onChange={this.updateSearchText}
                onKeyPress={this.handleSearchRequestEnterKeyPressed}
                class="form-control"
                placeholder="e.g. Alderaan, 516515" />
              <div class="input-group-append">
                <button class="btn btn-outline-info"
                  onClick={this.handleSearchRequest}
                  type="button">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-10 offset-sm-1">
            <table class="table table-striped">
              <thead class="thead-light font-weight-bold">
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Population</th>
                  <th>Terrain</th>
                  <th>Climate</th>
                  <th>Gravity</th>
                  <th>Edited</th>
                </tr>
              </thead>
              <tbody class="table-hover">
                {filteredListOfPlanets.map((planet, i) => {     
                  return (
                    <tr key={i}>
                      <td>{currentPage + i}</td>
                      <td>{planet.name}</td>
                      <td>{planet.population}</td>
                      <td>{planet.terrain}</td>
                      <td>{planet.climate}</td>
                      <td>{planet.gravity}</td>
                      <td>{planet.edited}</td>
                    </tr>
                  ) 
                })}
              </tbody>
            </table>

            <div class="row">
              <div class="col-sm-12">
                <nav>
                  <hr />
                  Pagination not working since api is broken now
                  <ul class="pagination">
                    {/* <li class="page-item disabled"><a class="page-link"  tabIndex="-1">Previous</a></li> */}
                    {dynamicPaginationButtons}
                    {/* <li class="page-item"> <a class="page-link">Next</a></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* {redirectHtml} */}
      </div>
    );
  }
}

export default Dashboard;
