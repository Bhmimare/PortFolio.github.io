const projects=[
 {name:'Frontend',desc:'Interfaz Web Responsive',link:'https://bhmimare.github.io/trabajo_html/'},
 {name:'Frontend',desc:'Aplicación Interactiva JavaScript',link:'https://bhmimare.github.io/TrabajoJavaScript.github.io/'}
];

function renderProjects(){
 const grid=document.getElementById('projectsGrid');
 projects.forEach(p=>{
  const div=document.createElement('div');
  div.className='project';
  div.innerHTML=`<h3>${p.name}</h3><p>${p.desc}</p><a href="${p.link}">Ver →</a>`;
  grid.appendChild(div);
 });
}

function scrollToId(id){
 document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

renderProjects();