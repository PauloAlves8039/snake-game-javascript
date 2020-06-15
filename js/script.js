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

let direction = 'right';
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

/**
 * Define o alimento do personagem.
 * @function
 * @name drawFood
 */
function drawFood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

/**
 * Atualiza a movimentação do personagem de acordo com a tecla pessionada.
 * @function
 * @name update
 * 
 * @param {*} event parâmetro para chamada de evento.
 */
function update(event) {
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

/**
 * Responsável pela inicialização do jogo.
 * @function
 * @nane iniciarJogo
 */
function iniciarJogo() {
    
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);

