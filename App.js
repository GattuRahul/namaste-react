const item = React.createElement('h1', {id:'parent'}, [
    React.createElement('h1', {}, ['Hello Iam child1 of parent!',
        React.createElement('div', {}, ['Hello Iam grand child of child1!'])
    ]),
    React.createElement('h1', {}, ['Hello Iam child2 of parent!'])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(item);