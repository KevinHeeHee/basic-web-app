export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "kevinhe"
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "HeeHee"
    );
  }
  if (query.toLowerCase().includes("what is ${`var1`} plus ${var2}?")) {
    const regex = /what is (\d+) plus (\d+)\?/i;
    const matches = query.toLowerCase().match(regex);
    if (matches && matches.length === 3) {
        // Extract the numbers from the matched groups
        const num1 = parseFloat(matches[1]);
        const num2 = parseFloat(matches[2]);
    
        // Perform addition
        const result = num1 + num2;
        return result.toString();
    }
  }
  return "";
}
