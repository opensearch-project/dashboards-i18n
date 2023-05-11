/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginInitializerContext } from '../../../src/core/server';
import { I18nDashboardsPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new I18nDashboardsPlugin(initializerContext);
}

export { I18nDashboardsPluginSetup, I18nDashboardsPluginStart } from './types';
