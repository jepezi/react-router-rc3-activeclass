import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexLink, Link } from 'react-router';
import history from './history';


class App extends Component {
  render() {
    console.warn(this.props);
    return <div>
      <h1>App</h1>
      {/*
      <ul>
        <li><IndexLink id="overviewLink" to="/website" activeClassName="active">overview</IndexLink></li>
        <li><Link id="contactLink" to="/website/contact" activeClassName="active">contact</Link></li>
        <li><Link id="productsLink" to="/website/products" activeClassName="active">products</Link></li>
        <li><IndexLink id="productsIndexLink" to="/website/products" activeClassName="active">products index</IndexLink></li>
        <li><Link id="specificProductLink" to="/website/products/15" activeClassName="active">specific product</Link></li>
      </ul>
    */}

      <ul>
        <li><IndexLink id="overviewLink" to="/" activeClassName="active">overview</IndexLink></li>
        <li><Link id="contactLink" to="/contact" activeClassName="active">contact</Link></li>
        <li><Link id="productsLink" to="/products" activeClassName="active">products</Link></li>
        <li><IndexLink id="productsIndexLink" to="/products" activeClassName="active">products index</IndexLink></li>
        <li><Link id="specificProductLink" to="/products/15" activeClassName="active">specific product</Link></li>
      </ul>

      {this.props.children}
    </div>;
  }
}

class Wrapper extends Component {
    render() {
      return <div>website wrapper {this.props.children}</div>
    }
  }

  class IndexPage extends Component {
    render() {
      return <div>website overview</div>
    }
  }

  class ContactPage extends Component {
    render() {
      return <div>contact page</div>
    }
  }

  class ProductsPage extends Component {
    render() {
      return <div>website products {this.props.children}</div>
    }
  }

  class ProductPage extends Component {
    render() {
      return <div>specific product {this.props.params.productId}</div>
    }
  }

  class ProductsIndexPage extends Component {
    render() {
      return <div>list of products</div>
    }
  }
  const routes = {
    component: App, childRoutes: [
      { path: '/website', component: Wrapper, indexRoute: IndexPage, childRoutes: [
        { path: 'products', component: ProductsPage, indexRoute: ProductsIndexPage, childRoutes: [
          { path: ':productId', component: ProductPage }
        ] },
        { path: 'contact', component: ContactPage }
      ] }
    ]
  };

render(
  <Router history={history} routes={routes}/>,
  document.getElementById('root')
);
