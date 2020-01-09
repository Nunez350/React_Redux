//The pid is the OS Process ID
console.log(process.pid);
//version refers to your Node version
console.log(process.version);
//platform is something general like 'linux' or 'darwin',
console.log(process.platform);
//process.title is a little bit different - while set to node by default, 
//it can be set to anything you want, and will be what gets displayed in lists of 
//running processes.
console.log(process.title);
//will return the absolute path of the executable that started this process
console.log(process.execPath);
//All environment variables
console.log(process.env);
console.log(process.env.HOME);

