- [Developer guide](#developer-guide)
  - [Forking and Cloning](#forking-and-cloning)
  - [Environment Setup](#environment-setup)
  - [Run](#run)
  - [Example](#example)
  - [New Locale](#new-locale)
  - [Contribute](#contribute)

## Developer guide

We're glad you're here. dashboards-i18n is a community driven plugin for localization. To use it, here's what you need to do.

### Forking and Cloning

Fork this repository on GitHub, and clone locally with `git clone`.

### Environment Setup

1. Download OpenSearch. You could clone the [OpenSearch repo](https://github.com/opensearch-project/OpenSearch.git), use [docker](https://opensearch.org/docs/latest/opensearch/install/docker/) or [artifact](https://opensearch.org/docs/latest/opensearch/install/tar/). Make sure the version matches the OpenSearch Dashboards version.

2. Setup the environment to run OpenSearch Dashboards. You will need to install [node.js](https://nodejs.org/en/), [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md), and [yarn](https://yarnpkg.com/) in your environment to properly pull down dependencies to build and bootstrap.

3. Download the OpenSearch-Dashboards source code.

   See the [OpenSearch Dashboards developer guide](https://github.com/opensearch-project/OpenSearch/blob/main/DEVELOPER_GUIDE.md) for more instructions on setting up your development environment.

4. Change your node version to the version specified in `.node-version` inside the OpenSearch-Dashboards root directory.

5. cd into the `plugins` directory of the OpenSearch-Dashboards source code directory. Clone [dashboards-i18n](https://github.com/opensearch-project/dashboards-i18n.git) into the `plugins` directory. Ultimately, your directory structure should look like this:

```md
.
├── OpenSearch-Dashboards
│   └── plugins
│       └── dashboards-i18n
```

6. Make sure the version of dashboards-i18n plugin in the `opensearch_dashboards.json` file matches the version of OpenSearch Dashboards. If the version needs to be updated, you can use the provided script to automatically update the `opensearchDashboardsVersion` in the `opensearch_dashboards.json` file. To update the version, run the following command in the `dashboards-i18n` directory:

```bash
yarn update-version
```

7. Config localization in dashboards-i18n. Add a locale json file in `translations` directory of the dashboards-i18n. Specify the path in `.i18nrc.json`. For example, if the locale json file you added is called `zh-CN.json`, the path should be `"translations": ["translations/zh-CN.json"]`.

8. Config localization in OpenSearch Dashboards. cd into the `config` directory of the OpenSearch-Dashboards source code directory. Add `i18n.locale: "{your locale}"` in `opensearch_dashboards.yml` file.

9. Run `yarn osd bootstrap` under `Opensearch-Dashboards`.

### Run

- `yarn start`

  - Starts OpenSearch-Dashboards and includes this plugin. A localized OpenSearch-Dashboards will be available on `localhost:5601`.
  - Please run in the OpenSearch-Dashboards root directory
  - You must have OpenSearch running.

### Example

1. Setup environment. Please refer to [Environment Setup](#environment-setup).
2. Config localization in dashboards-i18n. Add the following example `zh-CN.json` file in `translations` directory. In `.i18nrc.json`, add the path `"translations": ["translations/zh-CN.json"`.


```json
{
    "formats": {
        "number": {
            "currency": {
                "style": "currency"
            },
            "percent": {
                "style": "percent"
            }
        },
        "date": {
            "short": {
                "month": "numeric",
                "day": "numeric",
                "year": "2-digit"
            },
            "medium": {
                "month": "short",
                "day": "numeric",
                "year": "numeric"
            },
            "long": {
                "month": "long",
                "day": "numeric",
                "year": "numeric"
            },
            "full": {
                "weekday": "long",
                "month": "long",
                "day": "numeric",
                "year": "numeric"
            }
        },
        "time": {
            "short": {
                "hour": "numeric",
                "minute": "numeric"
            },
            "medium": {
                "hour": "numeric",
                "minute": "numeric",
                "second": "numeric"
            },
            "long": {
                "hour": "numeric",
                "minute": "numeric",
                "second": "numeric",
                "timeZoneName": "short"
            },
            "full": {
                "hour": "numeric",
                "minute": "numeric",
                "second": "numeric",
                "timeZoneName": "short"
            }
        },
        "relative": {
            "years": {
                "units": "year"
            },
            "months": {
                "units": "month"
            },
            "days": {
                "units": "day"
            },
            "hours": {
                "units": "hour"
            },
            "minutes": {
                "units": "minute"
            },
            "seconds": {
                "units": "second"
            }
        }
    },
    "messages": {
        "console.devToolsDescription": "跳过 cURL 并使用 JSON 接口在控制台中处理您的数据。",
        "console.devToolsTitle": "与 OpenSearch API 进行交互",
        "core.ui.welcomeMessage": "正在加载 OpenSearch",
        "dashboard.featureCatalogue.dashboardSubtitle": "在控制板中分析数据。",
        "discover.discoverSubtitle": "搜索和查找数据分析结果。",
        "home.addData.sectionTitle": "获取你的数据",
        "home.breadcrumbs.homeTitle": "主页",
        "home.header.title": "欢迎归来",
        "home.manageData.sectionTitle": "管理你的数据",
        "home.tutorialDirectory.featureCatalogueDescription": "从热门应用和服务中采集数据。",
        "home.tutorialDirectory.featureCatalogueTitle": "添加数据",
        "opensearchDashboardsOverview.opensearchDashboards.solution.subtitle": "可视化和分析",
        "opensearch-dashboards-react.osdOverviewPageHeader.addDataButtonLabel": "添加数据",
        "opensearch-dashboards-react.osdOverviewPageHeader.devToolsButtonLabel": "开发工具",
        "opensearch-dashboards-react.osdOverviewPageHeader.stackManagementButtonLabel": "管理",
        "opensearch-dashboards-react.pageFooter.appDirectoryButtonLabel": "查看应用目录",
        "opensearch-dashboards-react.pageFooter.changeHomeRouteLink": "登录时显示不同页面"
    }
}
```
3. Config localization in OpenSearch Dashboards. Add `i18n.locale: "zh-CN"` in `opensearch_dashboards.yml` file.
4. Run OpenSearch and OpenSearch Dashboards. Verify the login and home pages are correctly translated.

### New locale

Currently, we support en/en-US (English), es/es-LA (Spanish), fr/fr-FR (French), de/de-DE (German), ja/ja-JP (Japanese), ko/ko-KR (Korean), ru/ru-RU (Russian), zh/zh-CN (Chinese). If your locale is not in it, please open an issue in OpenSearch Dashboards.

### Contribute

Are you ready to contribute? You could send a PR to upload a new locale file or add up the existing locale. You could also contribute by opening an issue for any translation errors or just sharing some thoughts.
