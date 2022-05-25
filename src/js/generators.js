/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import Character from "./Character";
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const random = Math.random() * ((allowedTypes.length - 1))
  return new allowedTypes[random]
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  for (let i = 0; i <= characterCount; i++) {
    characterGenerator()
  }
}
