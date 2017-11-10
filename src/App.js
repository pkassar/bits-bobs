import React, { Component } from 'react';
import customers from './customers.json';
import './styles.scss';
import PieChart from 'react-simple-pie-chart';
import Products from './components/products/component.js'
import InfiniteScroll from 'react-infinite-scroller';


const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.age} {customer.gender}</td>
    <td><div className="first-line">
      <li>{customer.title} {customer.first_name} {customer.last_name}</li></div>
        <div className="second-line"><li>{customer.profession}</li></div></td>
      <td>{customer.has_children ? "Y" : "N"}</td>
    <td><Products items={customer.current_products} /></td>


  <td>
      <div className="traits">
        <ul className="trait-details">
          <li>
            <span className="key" />
            {customer.dominant_traits[0].level} {customer.dominant_traits[0].primary_trait}
            </li>
          <li>
          <span className="key" />
          {customer.dominant_traits[1].level} {customer.dominant_traits[1].secondary_trait}
          </li>
        </ul>
    <div className="pie">
      <PieChart
      slices={[
        {
          color: '#f00',
          value: customer.metrics.agreeableness,
        },
        {
          color: '#ff8a00',
          value: customer.metrics.extroversion,
        },
        {
          color: '#0094ff',
          value: customer.metrics.conscientiousness,
        },
        {
          color: '#0500ff',
          value: customer.metrics.openness,
        },
        {
          color: '#00b92e',
          value: customer.metrics.neuroticism,
        },
      ]}
      />
      </div>
    </div>

  </td>
  </tr>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      limit: 10,
      hasMore: true,
      items: [],
    }
  }
  nextPage = () => {
    // if(!this.state.hasMore){
    //   return;
    // }
    // console.log('loading more');
    // const nextPage = this.state.page + 1;
    // const currentPosition = this.state.limit * this.state.page;
    // const nextItems = customers.slice(
    //   currentPosition,
    //   this.state.limit
    // );
    // let hasMore = true
    //
    // if (nextItems.length < this.state.limit) {
    //   hasMore = false;
    // }
    // this.setState({
    //   page: nextPage,
    //   items: nextItems,
    //   hasMore: hasMore,
    // });
  }

  componentWillMount(){
    this.setState({
      items: customers.slice(0, this.state.limit),
    });
  }
  render() {
    return (
      <div id="app">
        <header>
          <h1>Walnut</h1>
          <h2> Customer Information System </h2>
        </header>
        <table className="client-data" cellspacing="0">
        <thead>
        <tr>
          <th>Age / Sex</th>
          <th>Name / Profession</th>
          <th>Children</th>
          <th>Products</th>
          <th>Dominant Traits</th>
        </tr>
        </thead>

      <InfiniteScroll
        element="tbody"
        pageStart={this.state.page}
        loadMore={this.nextPage}
        hasMore={this.state.hasMore}
        loader={<div className="loader">Loading ...</div>}
        >
          {
            this.state.items.map(c => <CustomerRow customer={c}/>)
          }

      </InfiniteScroll>
        </table>
      </div>
    );
  }
}

export default App;
