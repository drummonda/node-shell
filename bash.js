process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  // if cmd === 'pwd', find and print our current working directory
  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  }

  process.stdout.write('\nprompt > ');

});
