const pwd = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
        process.stdout.write('\n\nprompt >');
    }
});

module.exports = pwd;

