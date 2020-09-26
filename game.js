const roles = ['rock', 'paper', 'scissors'];
var userOption;
var computerOption;
var userOptionIn;
var comp;
var scoreCount = 0;
const score = $('#score>h1');
score.text(scoreCount);

const ruleBtn = document.getElementById('rule-btn');
ruleBtn.addEventListener('click', function() {
    $('#rule').css("display",'flex');
    $('#close').click(function() {
        $('#rule').css("display",'none'); 
    })
})
const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', function() {
    $('.main-display').removeClass('hidden');
    $('.result-display').addClass('hidden');
    $('#playerChoiceHolder>div').remove();
    $('#compChoiceHolder>div').remove();
    userOption = '';
    userOptionIn = 0;
    comp = 0;
    $('#result').addClass('hidden');
});

$('#rock, #paper, #scissors').click(function(event) {
 userOption = ($(event.target).attr('class'));
 var playerChoice = $('#'+userOption).clone();
console.log(event.target);
 userOptionIn = roles.indexOf(userOption);
$('.main-display').addClass('hidden');
$('.result-display').removeClass('hidden');
$('#playerChoiceHolder').append(playerChoice);
 setTimeout(function() {
    comp = computerOption();
    $('#result').removeClass('hidden');
    if((userOptionIn - 1) == comp||(userOptionIn + 2) == comp) {
         console.log('win');
        $('#result>h3').text('You Win');
        scoreCount++;
        score.text(scoreCount);
        }
    else if((userOptionIn) == comp) {
        console.log('draw');
        $('#result>h3').text('DRAW');
        scoreCount=scoreCount;
        score.text(scoreCount);
        }
    else {
        console.log('loss')
        $('#result>h3').text('You Lose');
        if(scoreCount!==0) {
            scoreCount--;
        }
        else {
            scoreCount=0;
        }
        score.text(scoreCount);
        }
    }, 2000)   
})

function computerOption() {
    var index =Math.floor(Math.random() *3);
    var compChoice = $('#'+roles[index]).clone();
    $('#compChoiceHolder').append(compChoice);
    console.log(index);
    return index;
}

// function select('')