const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hello, I am a %s string!', '⌇');

    // Styled
    console.log('%c Hello, I am an obnoxious red string!', 'font-size:16px; color:red;');

    // warning!
    console.warn('Warning!!');

    // Error :|
    console.error('SH*T!');

    // Info
    console.info('Some useful info...');

    // Testing
    console.assert(dogs.length !== 2, 'This is wrong!');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`He is ${dog.age} years old`);
      console.log(`He is ${dog.age * 7} in dog years`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');


    // timing
    console.time('fetching data..');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data..');
        console.log(data);
      });

    // table
    console.table(dogs);
