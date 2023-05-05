export function trimTextByWords(text: string, n: number) {
  const words = text.split(" ");

  if (words.length <= n) {
    return text;
  }

  return words.slice(0, n).join(" ") + "...";
}
