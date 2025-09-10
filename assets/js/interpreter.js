        function runJS() {
            const input = document.getElementById('js-input').value;
            const output = document.getElementById('js-output');
            try {
                // Use Function constructor for better scope isolation
                const result = Function('"use strict";return (' + input + ')')();
                output.textContent = String(result);
            } catch (e) {
                output.textContent = 'Error: ' + e.message;
            }
        }
        function clearJS() {
            document.getElementById('js-input').value = '';
            document.getElementById('js-output').textContent = '';
        }