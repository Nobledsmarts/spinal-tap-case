function spinalCase(str) {
  let sentence = str.replace(/\s/g, "-")
  .replace(/[A-Z]/g, char => "-" + char)
  .replace(/--/g, "-")
  .replace(/_/g, "")
  .toLowerCase();

  return sentence[0] === "-" ? sentence.slice(1) : sentence;
}

console.log(spinalCase('This Is Spinal Tap'));
