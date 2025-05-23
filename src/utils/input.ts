import * as readline from 'node:readline';

export function userInput(msg: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => rl.question(msg, (answer) => {
    rl.close();
    resolve(answer)
  }));
}