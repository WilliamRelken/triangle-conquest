import express from 'express';
import { createServer } from 'http';
import injectSocket from '../src/lib/socket.js';
import { handler } from '../build/handler.js';

const port = 3000;
const app = express();
const server = createServer(app);

injectSocket(server);

// SvelteKit should handle everything else using Express middleware
// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
app.use(handler);

server.listen(port);
