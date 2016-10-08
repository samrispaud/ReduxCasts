import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePercentRead } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    debugger

    console.log('BookDetail render: ', this.props);

    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <span>
          Percent Read
          <a onClick={() => this.props.changePercentRead(this.props.book, 1)}>( + )</a>
          /
          <a onClick={() => this.props.changePercentRead(this.props.book, -1)}>( - )</a>
        </span>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={this.props.book.percentRead}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: `${this.props.book.percentRead}%`}}>
              {`${this.props.book.percentRead}%`}
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger
  console.log('mapStateToProps in BookDetail');
  return {
    book: state.activeBook
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePercentRead: changePercentRead }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
