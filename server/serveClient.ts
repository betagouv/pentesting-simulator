import express, { Response } from 'express';
import path from 'path'

export { serveClient }

function serveClient() {
    const PORT = 3000;

    const app = express();

    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('/client/*', (_, res: Response) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });

    app.listen(PORT);
}
