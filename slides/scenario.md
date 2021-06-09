# Scenario

We have an application that currently is manually tested before being merged into `main`.

Netlify handles our deploy for us, but we want to start adding some better CI practices into our workflows.

## Goal

Set up a GitHub Action to run tests, and not allow a PR to be merged if those tests fail.
