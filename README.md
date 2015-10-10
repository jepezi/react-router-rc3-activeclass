```
npm i
npm start
```

open http://localhost:3000/, get this error
```
Warning: Location "/" did not match any routes
```

Route based on IndexLink-test in react-router repo.
```javascript
// index.js, line 70
...
const routes = {
  component: App, childRoutes: [
    {path: '/website', component: Wrapper, indexRoute: IndexPage, childRoutes: [
      {path: 'products', component: ProductsPage, indexRoute: ProductsIndexPage, childRoutes: [
        {path: ':productId', component: ProductPage}
      ]},
      {path: 'contact', component: ContactPage}
    ]}
  ]
};
// and we render
render(
  <Router history={history} routes={routes}/>,
  document.getElementById('root')
);
...
```

`history` is in history.js, using basename `/website`.
```javascript
import { useBasename } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory';

export default useBasename(createBrowserHistory)({ basename: '/website' });
```

In index.js, we have nav.
```javascript
...
<ul>
  <li><IndexLink id="overviewLink" to="/" activeClassName="active">overview</IndexLink></li>
  <li><Link id="contactLink" to="/contact" activeClassName="active">contact</Link></li>
  <li><Link id="productsLink" to="/products" activeClassName="active">products</Link></li>
  <li><IndexLink id="productsIndexLink" to="/products" activeClassName="active">products index</IndexLink></li>
  <li><Link id="specificProductLink" to="/products/15" activeClassName="active">specific product</Link></li>
</ul>
...
```

```
// dep
"history": "^1.12.4",
"react": "^0.14.0",
"react-dom": "^0.14.0",
"react-router": "^1.0.0-rc3",
```
