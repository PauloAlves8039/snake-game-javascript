/**
 * @file: script.js
 * @author: Paulo Alves
 * @description: responsável pela criação e configuração dos elementos do game.
 * @version 1.0.1 (15/06/2020)
 */

let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
};

/**
 * Define a criação do background.
 * @function
 * @name criarBG
 */
function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/**
 * Define a criação do personagem.
 * @function
 * @name criarCobrinha
 */
function criarCobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();