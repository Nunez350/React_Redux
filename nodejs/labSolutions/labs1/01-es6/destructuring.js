
let obj = {
    foo: 'foo1!',
    bar: 'bar!',
    baz: 'baz1!'
};

// assign keys to local variables with same names
let {foo, baz, bar} = obj;

// Note that we "skipped" #bar
console.log(foo, baz,bar); // foo! baz!


