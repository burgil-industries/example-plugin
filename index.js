// Copyright (c) 2026 COMPUTER. Provided "AS IS" without warranty. See LICENSE for full terms.
'use strict';
const path = require('path');

module.exports = {
    install(ctx) {
        const log = ctx.use('log');

        log(`example: data dir -> ${ctx.dataDir}`);

        // Write a greeting to the plugin's data directory
        const greetFile = path.join(ctx.dataDir, 'hello.txt');
        ctx.writeFile(greetFile, `Hello from ${ctx.pluginId} at ${new Date().toISOString()}\n`);
        log(`example: wrote -> ${greetFile}`);

        // Read it back and log it
        const content = ctx.readFile(greetFile);
        log(`example: ${content.trim()}`);

        log('example plugin loaded');
    }
};
