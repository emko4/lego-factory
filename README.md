## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Where it runs

Served on `legofactory.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the built page exactly as it is served: the output of
`npm run build` from this source (checked in October 2026 — the sources named
inside the build's source maps are identical to `src/`). It is committed so
that deploying needs no build: every push to `main` hands `site/` over to the
server (`.github/workflows/deploy.yml`), which checks the page and every script
and stylesheet it loads under all three hostnames, and goes back to the
release before if anything does not answer.

After changing the source: `npm run build`, replace the contents of `site/`
with those of `build/`, and commit both.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
