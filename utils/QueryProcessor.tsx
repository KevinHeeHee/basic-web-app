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
  if (query.toLowerCase().includes("plus")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
    if (matches && matches.length >= 2) {
        const result = matches.map(Number).reduce((a, b) => a + b, 0);
        return result.toString();
    } else {
        return "ERROR";
    }
  }
  if (query.toLowerCase().includes("largest")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
    if (matches && matches.length >= 2) {
        const result = matches.map(Number).reduce((a, b) => Math.max(a, b), -Infinity);
        return result.toString();
    } else {
        return "ERROR";
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
    if (matches && matches.length >= 2) {
        const result = matches.map(Number).reduce((a, b) => a * b, 1);
        return result.toString();
    } else {
        return "ERROR";
    }
  }
  if (query.toLowerCase().includes("cube")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
    if (matches && matches.length >= 2) {
        const result = matches.map(Number).filter(num => {
            const root = Math.sqrt(num);
            const cubeRoot = Math.cbrt(num);
            return root % 1 == 0 && cubeRoot % 1 == 0;
        });
        return result.toString();
    } else {
        return "ERROR";
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
    if (matches && matches.length >= 2) {
        // Extract the numbers from the matched groups
        const num1 = parseFloat(matches[0]);
        const num2 = parseFloat(matches[1]);
    
        // Perform addition
        const result = num1 - num2;
        return result.toString();
    }
  }
  return "";
}
