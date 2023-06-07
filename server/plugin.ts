/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { I18nDashboardsPluginSetup, I18nDashboardsPluginStart } from './types';
import { defineRoutes } from './routes';

export class I18nDashboardsPlugin
  implements Plugin<I18nDashboardsPluginSetup, I18nDashboardsPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('dashboards-i18n: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('dashboards-i18n: Started');
    return {};
  }

  public stop() {}
}
