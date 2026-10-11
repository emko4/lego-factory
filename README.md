## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode (Vite).\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Checks the types, then builds the app for production **into the `site` folder** —
the folder that is served (see below).

The build is minified and the filenames include the hashes.

### `npm run preview`

Serves the built `site` folder locally, as the server would.

## Where it runs

Served on `legofactory.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the built page exactly as it is served: the output of
`npm run build` from this source. It is committed so that deploying needs no
build: every push to `main` hands `site/` over to the server
(`.github/workflows/deploy.yml`), which checks the page and every script and
stylesheet it loads under all three hostnames, and goes back to the release
before if anything does not answer.

After changing the source: `npm run build`, and commit `site/` with it.

The page was first built with Create React App (2023). In October 2026 the
build moved to Vite and the libraries to their current versions, because the
old toolchain had a hundred known vulnerabilities; the rebuilt page was
compared with the old one in a browser, step by step, and shows the same.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
