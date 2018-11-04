import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import './css/anomaly-panel.css';

const panelDefaults = {
};

// http://docs.grafana.org/plugins/developing/development/
export class AnomalyCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);
  }

  // Grafana event handler: Add tabs when editing a panel
  onInitEditMode() {
    // TODO
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
      $panelContainer.css('background-color', '#00FF00');
    })
  }
}
