import inquirer from 'inquirer';
import PressToContinuePrompt from 'inquirer-press-to-continue';
import type { KeyDescriptor } from 'inquirer-press-to-continue';

inquirer.registerPrompt('press-to-continue', PressToContinuePrompt);

const { key: enterKey } = await inquirer.prompt<{ key: KeyDescriptor }>({
  name: 'key',
  type: 'press-to-continue',
  enter: true,
});

console.log(enterKey.value); // "enter"

const { key: anyKey } = await inquirer.prompt<{ key: KeyDescriptor }>({
  name: 'key',
  type: 'press-to-continue',
  anyKey: true,
  pressToContinueMessage: 'Press a key to continue...',
});

console.log(anyKey.value);