function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if(answer == word)
    {
        if(answer=turn = "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
    
        }
        else
        {
            player1_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score; 
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById(player_question).innerHTML = "qusetion turn - " + player2_name ;
    }
    else
    {
        answer_turn ="player1"
        document.getElementById("player1_name").innerHTML = "answer turn - " = player1_name ;
    }
    if(question_turn == "player2")
    {
        question_turn = "player1"
        document.getElementById(player_question).innerHTML = "qusetion turn - " + player1_name ;
    }
    else
    {
        answer_turn ="player2"
        document.getElementById("player2_name").innerHTML = "answer turn - " = player2_name ;
    }
}