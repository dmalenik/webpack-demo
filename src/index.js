import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello, webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Lazy Loading of the print.js module
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    // reference to default property as it's the actual module object
    // that will be return as the promise is resolved
    const print = module.default;

    print();
  });

  return element;
}

document.body.appendChild(component());
