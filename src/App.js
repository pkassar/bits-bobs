import React, { Component } from 'react';
import customers from './customers.json';
import './styles.scss';
import PieChart from 'react-simple-pie-chart';

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? "Y" : "N"}</td>
    <td>
      <div className="traits">
        <ul className="trait-details">
          <li>
          <span className="key" />
          {customer.dominant_traits[0].level} {customer.dominant_traits[0].primary_trait},
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
              <th>Dominant Traits</th>

            </tr>
          </thead>
          <tbody>
          {
            customers.slice(0, 10).map(c => <CustomerRow customer={c}/>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
