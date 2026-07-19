const CORRECT_MESSAGES = [
  'Nice! 🎉',
  'Great job! ✨',
  'You got it! 🌟',
  'Sugoi! 😄',
  'Perfect! 👏',
  'Excellent! 🎊',
  'Way to go! 🙌',
]

const WRONG_PREFIXES = ['Not quite —', 'So close —', 'Almost —', 'Keep going —', 'Nice try —']

function pick(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export function randomCorrectMessage() {
  return pick(CORRECT_MESSAGES)
}

export function randomWrongMessage(correctValue) {
  return `${pick(WRONG_PREFIXES)} it's "${correctValue}"`
}
