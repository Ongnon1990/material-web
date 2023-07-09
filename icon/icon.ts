/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

importcustomElement from 'lit/decorators.js';

importIconfrom './lib/icon.js';
importstyles from './lib/icon-styles.css.js';

declareglobal {
  interfaceHTMLElementTagNameMap {
    'md-icon': MdIcon;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement md-icon
exportclassMdIcon extendsIcon {
  /** @nocollapse */
  static override styles = [styles];
}
