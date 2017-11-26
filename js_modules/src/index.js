const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
  	// console.log('MODULE: ', module);
  	module.default();
  });
  //async call to the server for this module
};

document.body.appendChild(button);