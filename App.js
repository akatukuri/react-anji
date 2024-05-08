// const heading = React.createElement(
//   "h1",
//   { class: "heading" },
//   " Hellow world react Anji"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div", { id: "child1" },
//       [ React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h2", {}, "I am h2 tag"),
//       React.createElement("h3", {}, "I am h3 tag")
//     ]
//     ),
//     React.createElement(
//       "div", { id: "child2" },
//       [ React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h2", {}, "I am h2 tag"),
//       React.createElement("h3", {}, "I am h3 tag")
//     ]
//     )
//   ]
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const parent = React.createElement (
  'ul', {'id': "parent_ultag"},
  [
    React.createElement (
      'li', {class: 'list_of_li-classanme'},
      [
        React.createElement('sapn', {}, 'this is content'),
      ]
    ),
    React.createElement (
      'li', {class: 'list_of_li-classanme'},
      [
        React.createElement('sapn', {}, 'this is content 11111111'),
      ]
    )
  ]
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
