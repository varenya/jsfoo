import R from 'ramda';

const joinSlash = R.join(' | ');

const compute = joinSlash(['wow', 'curried', 'it is']);

const createComponent = text => {
  const ele = document.createElement('div');
  ele.innerText = text;
  return ele;
};

const createBreak = () => document.createElement('br');

console.log(compute, 'inside bundle!');
document.body.appendChild(createComponent(compute));
document.body.appendChild(createBreak());
document.body.appendChild(createComponent('hello webpack!'));
document.body.appendChild(createBreak());
document.body.appendChild(createComponent('hello webpack this is awesome!'));
