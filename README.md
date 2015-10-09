```
npm start
```

open http://localhost:3000/

```javascript
// index.js, line 60
...
<ul>
  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
  <li><Link to="/product_category" activeClassName="active">Category</Link></li>
  <li><Link to="/product_category/new" activeClassName="active">New Category</Link></li>
  <li><Link to="/product_category/1" activeClassName="active">Category 1</Link></li>
  <li><Link to="/login" activeClassName="active">login</Link></li>
</ul>
...
const routes =
{component: App, childRoutes: [
  {path: '/', component: Wrapper, indexRoute: Home, childRoutes: [
    {path: 'product_category', component: ProductCategory, childRoutes: [
      {path: 'new', component: ProductCategoryForm},
      {path: ':id', component: ProductCategoryForm},
    ]},
  ]},
  {path: '/login', component: Login},
  {path: '*', component: NotFound},
]};
...
```
Then click the nav around. At index '/', expect to see "Home" in red
