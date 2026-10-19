# GlucoseDAO website

Live website: https://glucosedao.github.io/

The current website is a buildless static site in `site/`:

- `index.html`: content and layout
- `style.css`: responsive styling and molecular illustration presentation
- `script.js`: forecast horizon selector and compact navigation
- `assets/`: logo, application and study screenshots, team portraits and video thumbnails

To preview locally, run `python3 -m http.server 4173 --directory site` and open http://localhost:4173/.

Commits to `main` that change `site/` or the deployment workflow automatically deploy through GitHub Pages. No Node build or package installation is required.

The previous VitePress sources remain in `docs/` for reference and in Git history. They are not included in the current Pages deployment.

## Content and images

Product features and installation instructions follow the [GlucoWatch repository](https://github.com/GlucoseDAO/glucowatch). Direct APK links are pinned to release v0.1.13; the site also links to the latest release and the Obtainium installation guide. Update the pinned links and version text together when publishing a newer release.

The phone, watch and report screenshots use synthetic demo data. The Sugar Sugar screenshot comes from a local example game in the study interface. No participant was enrolled or consent submitted to create it.

The team and advisory-board names follow the supplied 2026 project deck, with role descriptions from the project materials. Existing public team portraits and presentation thumbnails are retained from this repository.

The BGI Nexus acknowledgement links to the [funder's project listing](https://bginexus.io/sponsored-projects/glucosedao). The open-source initiative and startup in development are described separately, without promising that all future commercial work will be open source.

Research figures describe a local MetaboNet development benchmark, not clinical validation or an external competition ranking. The expandable explanation on the site names the model, population and evaluation context.
