import { IAlphabet } from "../interfaces/Alphabet";

const a = 97;
export let alphabet: IAlphabet = {};
for (var i = 0; i < 26; i++) {
  alphabet[String.fromCharCode(a + i)] = [];
}
