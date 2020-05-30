<template>
  <form class="config-params">
    <h2>Editar textos</h2>
  
    <label for="title">Título:</label>
    <textarea id="title" cols="40" rows="5" placeholder="Insira o texto de título"></textarea>

    <label for="title">Subtítulo:</label>
    <textarea id="title" cols="40" rows="5" placeholder="Insira o texto de subtítulo"></textarea>

    <label for="timer">Tempo (minutos):</label>
    <input type="number" id="timer">

    <label for="paragraph">Paragrafo:</label>
    <textarea id="paragraph" cols="40" rows="5" placeholder="Insira o texto de paragrafo"></textarea>

    <input type="submit" value="Salvar" class="btn">
  </form>
</template>

<style lang="scss" scoped>
  .config-params {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #262626;
    padding: 30px;
    box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.4);
    height: 100vh;
    overflow-y: scroll;
    z-index: 999;
    scrollbar-color: #12A5B7 #444;
    scrollbar-width: medium;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #444;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #12A5B7;	
      border-radius: 2px;
      background-image: -webkit-linear-gradient(45deg,
      rgba(255, 255, 255, .2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, .2) 50%,
        rgba(255, 255, 255, .2) 75%,
        transparent 75%,
        transparent)
    }

    &::-webkit-scrollbar {
      width: 12px;
    }

    > h2 {
      text-align: center;
      font-size: 28px;
      margin: 0;
      margin-bottom: 30px;

      &:after {
        content: "";
        margin-top: 5px;
        display: block;
        height: 2px;
        background-color: #fff;
      }
    }

    > label {
      display: block;
      margin-bottom: 10px;
    }

    > textarea,
    > input {
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 2px solid #fff;
      transition: all .3s ease;
      border-radius: 4px;
      color: #333;

      + label {
        margin-top: 30px;
      }

      &:active,
      &:focus {
        border-color: #EB027E;
      }
    }

    > textarea {
      min-width: 300px;
      min-height: 100px;
    }

    > .btn {
      display: block;
      margin-top: 60px;
      margin-left: auto;
      background-color: #EB027E;
      color: #fff;
      font-weight: bold;
      width: 150px;
      cursor: pointer;
      margin-bottom: 60px;

      &:hover {
        background-color: #AE025E;
      }
    }
  }

  #timer {
    width: 100px;
  }
</style>