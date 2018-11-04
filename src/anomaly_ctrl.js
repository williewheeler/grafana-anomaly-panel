import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import './css/anomaly-panel.css';

const panelDefaults = {
};

export class AnomalyCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);
  }

  onInitEditMode() {
    // TODO
  }

  onPanelTeardown() {
    // TODO
  }

  link(scope, elem) {
    this.events.on('render', () => {
      const $panelContainer = elem.find('.panel-container');
      $panelContainer.css('background-color', '#00FF00');
    })
  }
}
