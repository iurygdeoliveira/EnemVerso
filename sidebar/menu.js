
document.addEventListener("DOMContentLoaded", function() { 
  let itensHTML = `
    <li>
      <a href="#" title="Artes">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil-heart" width="19" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M17 11l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l2 -2" />
            <path d="M13.5 6.5l4 4" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
        </span>
        <span class="disciplina">Artes</span>
      </a>
    </li>
    <li>
      <a href="#" title="Matematica">
        <span>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-math"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 5h-7l-4 14l-3 -6h-2" /><path d="M14 13l6 6" /><path d="M14 19l6 -6" /></svg>
        </span>
        <span class="disciplina">Matematica</span>
      </a>
    </li>
    <li>
      <a href="#" title="Portugues">
        <span><svg  xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-language"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h7" /><path d="M9 3v2c0 4.418 -2.239 8 -5 8" /><path d="M5 9c0 2.144 2.952 3.908 6.7 4" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg></span>
         <span class="disciplina">Portugues</span>
      </a>
    </li>
    <li>
      <a href="#" title="Fisica">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-area-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" /><path d="M4 12l3 -4l4 2l5 -6l4 4" /></svg>
        </span>
         <span class="disciplina">Fisica</span>
      </a>
    </li>`;
  document.getElementById("menu").innerHTML = itensHTML;
});