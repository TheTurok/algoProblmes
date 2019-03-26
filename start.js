function setup(){
  var lis = document.querySelectorAll('ul li');

  lis.forEach(node => {
    node.addEventListener('click', function(e){
      lis[0].parentNode.prepend(this);
    });
  });
}

document.body.innerHTML =
`
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
`;

setup();

document.getElementsByTagName("li")[1].click();
console.log(document.body.innerHTML);
