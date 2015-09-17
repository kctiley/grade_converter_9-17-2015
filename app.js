
var gradeConverter = function(arrOfScores, newArr) {
    var result = newArr || [];
    var letterGrade = function(num){
        if (num > 89){
            return "A";
        }
        else if (num > 79){
            return "B";
        }
        else if (num > 69){
            return "C";
        }
        else if (num >59){
            return "D";
        }
        else if (num < 60){
            return "F";
        }
        else return "Not a number."

    }

    if (arrOfScores.length == 0){
        console.log(result)
    }

    else {
        result.push(letterGrade(arrOfScores[0]));
        return gradeConverter(arrOfScores.slice(1), result)
    }
}

gradeConverter([60,100,81, 57])
