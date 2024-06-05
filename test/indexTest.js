const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions that modify the cats array
function destructivelyAppendCat(name) {
  // Adds a cat to the end of the cats array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Adds a cat to the beginning of the cats array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // Removes and returns the last cat from the cats array
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Removes and returns the first cat from the cats array
  return cats.shift();
}

// Non-destructive functions that create new arrays
function appendCat(name) {
  // Creates a new array with the appended cat and returns it
  return [...cats, name];
}

function prependCat(name) {
  // Creates a new array with the prepended cat and returns it
  return [name, ...cats];
}

function removeLastCat() {
  // Creates a new array excluding the last cat and returns it
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // Creates a new array excluding the first cat and returns it
  return cats.slice(1);
}


require('./helpers.js'); // Assuming helpers.js is defined

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        const appendedCats = appendCat("Broom"); // Capture the returned array

        expect(appendedCats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]); // Original array remains unchanged
      });
    });

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        const prependedCats = prependCat("Arnold"); // Capture the returned array

        expect(prependedCats).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]); // Original array remains unchanged
      });
    });

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        const removedLastCat = removeLastCat(); // Capture the returned array

        expect(removedLastCat).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]); // Original array remains unchanged
      });
    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        const removedFirstCat = removeFirstCat(); // Capture the returned array

        expect(removedFirstCat).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]); // Original array remains unchanged
      });
    });
  });
});


