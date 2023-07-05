import { Turbo, cable } from "@hotwired/turbo-rails";
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;
window.Turbo = Turbo;

export { application };
