document.addEventListener("DOMContentLoaded", function() { 
  let itensHTML = `<li>
  <a href=javascript:chamarGraficoQuimica()" title="Quimica">
    <span>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-math"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 5h-7l-4 14l-3 -6h-2" /><path d="M14 13l6 6" /><path d="M14 19l6 -6" /></svg>
    </span>
    <span class="disciplina">Quimica</span>
  </a>
</li>
<li>
  <a href="#" title="Portugues">
    <span class="icone"><svg  xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 19 19"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-language"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h7" /><path d="M9 3v2c0 4.418 -2.239 8 -5 8" /><path d="M5 9c0 2.144 2.952 3.908 6.7 4" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg></span>
     <span class="disciplina">Português</span>
  </a>
</li>
<li>
  <a href="#" title="Fisica">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 19 19"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-area-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" /><path d="M4 12l3 -4l4 2l5 -6l4 4" /></svg>
    </span>
     <span class="disciplina">Fisica</span>
  </a>
</li>`;
  document.getElementById("menu").innerHTML = itensHTML;
});