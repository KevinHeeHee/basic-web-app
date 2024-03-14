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
  if (query.toLowerCase().includes("what is (\d+) plus (\d+)\?")) {
    const regex = /what is (\d+) plus (\d+)\?/i;
    const matches = query.toLowerCase().match(regex);
    if (matches) {
        // Extract the numbers from the matched groups
        const num1 = parseFloat(matches[0]);
        const num2 = parseFloat(matches[1]);
    
        // Perform addition
        const result = num1 + num2;
        return result.toString();
    }
  }
  if (query.toLowerCase().includes("what is (\d+) multiplied by (\d+)\?")) {
    const regex = /what is (\d+) multiplied by (\d+)\?/i;
    const matches = query.toLowerCase().match(regex);
    if (matches) {
        // Extract the numbers from the matched groups
        const num1 = parseFloat(matches[0]);
        const num2 = parseFloat(matches[1]);
    
        // Perform addition
        const result = num1 * num2;
        return result.toString();
    }
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest: (\d+), (\d+), (\d+)\?")) {
    const regex = /which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/i;
    const matches = query.toLowerCase().match(regex);
    if (matches) {
        // Extract the numbers from the matched groups
        const num1 = parseFloat(matches[0]);
        const num2 = parseFloat(matches[1]);
        const num3 = parseFloat(matches[2]);

        // Perform addition
        const result = Math.max(num1, num2, num3);
        return result.toString();
    }
  }
  return "";
}
