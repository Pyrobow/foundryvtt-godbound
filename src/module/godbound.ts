/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: Pyrobow
 * Content License: Copyright 2016 Sine Nomine Publishing If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: MIT License
 */

// Import TypeScript modules
import { registerSettings } from './settings';
import { preloadTemplates } from './preloadTemplates';
import { godbound } from './config';
import registerHelpers from './handlebarHelpers';
import GodboundItemSheet from './sheets/items/GodboundItemSheet';
import GodboundCharacterSheet from './sheets/actors/GodboundCharacterSheet';

declare global {
  interface CONFIG {
    // eslint-disable-next-line @typescript-eslint/ban-types
    godbound: Object;
  }
}

// Initialize system
Hooks.once('init', async () => {
  console.log('godbound | Initializing godbound');

  // Assign custom classes and constants here
  CONFIG.godbound = godbound;
  // Register custom system settings
  registerSettings();

  // Preload Handlebars templates
  await preloadTemplates();

  // Register custom sheets (if any)
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('godbound', GodboundItemSheet, { makeDefault: true });

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('godbound', GodboundCharacterSheet, { makeDefault: true });
  // Register handlebars helpers
  registerHelpers();
});

// Setup system
Hooks.once('setup', async () => {
  // Do anything after initialization but before
  // ready
});

// When ready
Hooks.once('ready', async () => {
  // Do anything once the system is ready
});

// Add any additional hooks if necessary
