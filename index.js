import R from 'ramda';

const joinSlash  = R.join("|");

const compute = joinSlash(["wow","curried","it is"]);

const createComponent = (text) => {
        const ele = document.createElement('div');
        ele.innerHtml = text;
        return ele;
}

document.body.appendChild(createComponent(compute));
