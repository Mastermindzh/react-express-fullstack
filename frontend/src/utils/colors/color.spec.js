import { getRandomColor } from './colors';

describe('Color utilities', () => {

  describe('getRandomColor', () => {
    let color = getRandomColor();

    it('starts with hashtag', () => {
      expect(color).toMatch(/^#/);
    });

    it('is 4 or 7 characters long', () => {
      expect(color.length == 4 || color.length == 7).toBe(true);
    });

    it('Only has numbers or A-E after hashtag', () => {
      let valid = '0123456789abcdef';

      // remove hastag -> loop through valid numbers
      color.toLowerCase().substr(1).split('').forEach(letter => {
        expect(valid).toContain(letter);
      })
    });


  })

})
