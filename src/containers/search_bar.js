import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//redux-akcije
import { fetchWeather } from '../redux/actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state= {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit} >
          <input placeholder="Potražite 5-dnevnu vremensku prognozu vašeg traženog grada"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}
          />
          <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

//redux
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//null - znaći da ovom kontenjeru netreba nikakav state
export default connect(null, mapDispatchToProps)(SearchBar);
