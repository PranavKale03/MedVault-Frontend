export function shortenSentence(sentence, limit) {
  const maxLength = limit + 1;

  if (sentence?.length > maxLength) {
    return sentence?.slice(0, limit) + "...";
  } else {
    return sentence;
  }
}
