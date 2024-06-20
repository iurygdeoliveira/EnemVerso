
document.addEventListener("DOMContentLoaded", function() { 
  let itensHTML = <ul>
    <li>
      <a href="#" title="Matematica">
        <span>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="19"  height="19"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-math"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 5h-7l-4 14l-3 -6h-2" /><path d="M14 13l6 6" /><path d="M14 19l6 -6" /></svg>
        </span>
        <span class="disciplina">Matematica</span>
      </a>
    </li>
  </ul>;
  document.getElementById("menu").innerHTML = itensHTML;
});