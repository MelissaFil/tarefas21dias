import React from  'react'

const Header = ()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Sistema de tarefas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="tarefas">Tarefas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="resumo">Resumo</a>
      </li>
    </ul>
    
  </div>
</nav>
    )
}

export default Header