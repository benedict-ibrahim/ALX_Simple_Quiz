 // Function to check the user's answer
        function checkAnswer() {
            // The correct answer
            const correctAnswer = "4";
            
            // Get the user's selected answer
            const selectedOption = document.querySelector('input[name="quiz"]:checked');
            
            // Check if an option was selected
            if (!selectedOption) {
                document.getElementById('feedback').textContent = "Please select an answer!";
                document.getElementById('feedback').className = "incorrect";
                return;
            }
            
            const userAnswer = selectedOption.value;
            const feedbackElement = document.getElementById('feedback');
            
            // Compare the answers
            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Correct! Well done.";
                feedbackElement.className = "correct";
            } else {
                feedbackElement.textContent = "That's incorrect. Try again!";
                feedbackElement.className = "incorrect";
            }
        }
        
        // Add event listener to the submit button
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('submit-answer').addEventListener('click', checkAnswer);
        });