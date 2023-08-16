function startDictation() {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = 'en-US';
    recognition.lang = 'fil-PH';
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('search-input').value = e.results[0][0].transcript;
      recognition.stop();
      document.getElementById('search-input').value = transcript;
    };

    recognition.onend = function (e) {
      document.getElementById('search-form').submit();
    }

    recognition.onerror = function (e) {
      recognition.stop();
    };
  }
} 