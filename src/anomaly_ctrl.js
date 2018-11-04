import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import './css/anomaly-panel.css!';

const panelDefaults = {
  bgColor: null
};

// http://docs.grafana.org/plugins/developing/development/
export class AnomalyCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('panel-initialized', this.render.bind(this));
  }

  // Grafana event handler: Add tabs when editing a panel
  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/grafana-anomaly-panel/partials/editor.html', 2);
  }

  // Grafana event handler: Cleanup
  onPanelTeardown() {
    // TODO
  }

  // Grafana event handler: Event triggered on data refresh
  onDataReceived() {
    // TODO
  }

  // Grafana event handler: Event triggered to load data when in snapshot mode
  onDataSnapshotLoad() {
    // TODO
  }

  // Grafana event handler: Handles errors on dashboard refresh
  onDataError() {
    // TODO
  }

  link(scope, elem) {
    this.events.on('render', () => {
      const $panelContainer = elem.find('.panel-container');
      if (this.panel.bgColor) {
        $panelContainer.css('background-color', this.panel.bgColor);
      } else {
        $panelContainer.css('background-color', '');
      }
    })
  }
}

AnomalyCtrl.templateUrl = 'partials/module.html';
