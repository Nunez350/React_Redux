const util = require("util");
// Normal Function
function add(a,b){
    return a + b;
  }
  // Async Function
  async function add(a,b){
    return a + b;
  }

  /**
   * Async function declarations return an async object. These are similar to Generator in the sense that their execution can be paused. The only fundamental difference is that they always yield a Promise instead of a  { value: any, done: boolean } object.
   */