const intext = document.getElementById("intext");
const wordcount = document.getElementById("wordcount");

function updateWordCount(input) {
  const text = intext.value;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  wordcount.textContent = `Word Count: ${words}`;
}
