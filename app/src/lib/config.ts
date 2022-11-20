import { base } from '$app/paths';
import ioClient from 'socket.io-client';
const ENDPOINT = base;

const socket = ioClient(ENDPOINT);

export const io = socket;
