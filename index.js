import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexLink, Link } from 'react-router';
import history from './history';


class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <ul>
        <li><IndexLink id="overviewLink" to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link id="contactLink" to="/product_category" activeClassName="active">Category</Link></li>
        <li><Link id="productsLink" to="/product_category/new" activeClassName="active">New Category</Link></li>
        <li><Link id="productsIndexLink" to="/product_category/1" activeClassName="active">Category 1</Link></li>
        <li><Link id="specificProductLink" to="/login" activeClassName="active">login</Link></li>
      </ul>
      {this.props.children}
    </div>;
  }
}

class Wrapper extends Component {
  render() {
    return <div>wrapper {this.props.children}</div>
  }
}

class Home extends Component {
  render() {
    return <div>home</div>
  }
}

class ProductCategory extends Component {
  render() {
    return <div>product category main {this.props.children}</div>
  }
}

class ProductCategoryForm extends Component {
  render() {
    console.warn(this.props);
    return <div>product category {this.props.params.id ? this.props.params.id : 'new'}</div>
  }
}

class Login extends Component {
  render() {
    return <div>Login</div>
  }
}

class NotFound extends Component {
  render() {
    return <div>Not found</div>
  }
}

const routes =
{component: App, childRoutes: [
  {path: '/', component: Wrapper, indexRoute: {component: Home}, childRoutes: [
    {path: 'product_category', component: ProductCategory, childRoutes: [
      {path: 'new', component: ProductCategoryForm},
      {path: ':id', component: ProductCategoryForm},
    ]},
  ]},
  {path: '/login', component: Login},
  {path: '*', component: NotFound},
]};

render(
  <Router history={history} routes={routes}/>,
  document.getElementById('root')
);
