  // Arithmetic functions
        function add(number1, number2) {
            return number1 + number2;
        }
        
        function subtract(number1, number2) {
            return number1 - number2;
        }
        
        function multiply(number1, number2) {
            return number1 * number2;
        }
        
        function divide(number1, number2) {
            if (number2 === 0) {
                return "Cannot divide by zero!";
            }
            return number1 / number2;
        }
        
        // Helper function to get input values
        function getInputNumbers() {
            const number1 = parseFloat(document.getElementById('number1').value) || 0;
            const number2 = parseFloat(document.getElementById('number2').value) || 0;
            return [number1, number2];
        }
        
        // Function to display result
        function displayResult(result) {
            document.getElementById('calculation-result').textContent = result;
        }
        
        // Event listeners for each operation
        document.addEventListener('DOMContentLoaded', function() {
            // Addition
            document.getElementById('add').addEventListener('click', function() {
                const [number1, number2] = getInputNumbers();
                displayResult(add(number1, number2));
            });
            
            // Subtraction
            document.getElementById('subtract').addEventListener('click', function() {
                const [number1, number2] = getInputNumbers();
                displayResult(subtract(number1, number2));
            });
            
            // Multiplication
            document.getElementById('multiply').addEventListener('click', function() {
                const [number1, number2] = getInputNumbers();
                displayResult(multiply(number1, number2));
            });
            
            // Division
            document.getElementById('divide').addEventListener('click', function() {
                const [number1, number2] = getInputNumbers();
                displayResult(divide(number1, number2));
            });
        });