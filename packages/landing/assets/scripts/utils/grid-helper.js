/**
 * Grid Helper
 *
 * Provides a grid based on the design guidelines and is helpful for web integration.
 *
 * - `Control + g` to toggle the grid
 *
 */

/**
 * @typedef {Object} GridHelperReference
 *
 * @property {string} [gutterCssVar=GRID_HELPER_GUTTER_CSS_VAR] - CSS variable used to define grid gutters.
 * @property {string} [marginCssVar=GRID_HELPER_MARGIN_CSS_VAR] - CSS variable used to define grid margins.
 * @property {string} [rgbaColor=GRID_HELPER_RGBA_COLOR]        - RGBA color for the grid appearence.
 */

const GRID_HELPER_GUTTER_CSS_VAR = '--grid-gutter';
const GRID_HELPER_MARGIN_CSS_VAR = '--grid-margin';
const GRID_HELPER_RGBA_COLOR = 'rgba(255, 0, 0, .1)';

/**
 * Create a grid helper
 *
 * @param {GridHelperReference}
 *
 */
function gridHelper({
    gutterCssVar = GRID_HELPER_GUTTER_CSS_VAR,
    marginCssVar = GRID_HELPER_MARGIN_CSS_VAR,
    rgbaColor = GRID_HELPER_RGBA_COLOR,
} = {}) {
    // Set grid container
    const $gridContainer = document.createElement('div');
    document.body.append($gridContainer);

    // Set grid appearence
    setGridHelperColumns($gridContainer, rgbaColor);
    setGridHelperStyles($gridContainer, gutterCssVar, marginCssVar);

    // Set grid interactivity
    setGridEvents($gridContainer, rgbaColor);
}

/**
 * Set grid container styles
 *
 * @param {HTMLElement} $container - DOM Element that contains a list of generated columns
 * @param {string} gutterCssVar    - CSS variable used to define grid gutters.
 * @param {string} marginCssVar    - CSS variable used to define grid margins.
 *
 */
function setGridHelperStyles($container, gutterCssVar, marginCssVar) {
    const elStyles = $container.style;
    elStyles.zIndex = '10000';
    elStyles.position = 'fixed';
    elStyles.top = '0';
    elStyles.left = '0';
    elStyles.display = 'flex';
    elStyles.width = '100%';
    elStyles.height = '100%';
    elStyles.columnGap = `var(${gutterCssVar}, 0)`;
    elStyles.paddingLeft = `var(${marginCssVar}, 0)`;
    elStyles.paddingRight = `var(${marginCssVar}, 0)`;
    elStyles.pointerEvents = 'none';
    elStyles.visibility = 'hidden';
}

/**
 * Set grid columns
 *
 * @param {HTMLElement} $container - DOM Element that will contain a list of generated columns
 * @param {string} rgbaColor       - RGBA color to stylize the generated columns
 *
 */
function setGridHelperColumns($container, rgbaColor) {
    // Clear columns
    $container.innerHTML = '';

    // Loop through columns
    const columns = Number(
        window.getComputedStyle($container).getPropertyValue('--grid-columns')
    );

    let $col;
    for (var i = 0; i < columns; i++) {
        $col = document.createElement('div');
        $col.style.flex = '1 1 0';
        $col.style.backgroundColor = rgbaColor;
        $container.appendChild($col);
    }
}

/**
 * Set grid events
 *
 * Resize to rebuild columns
 * Keydown/Keyup to toggle the grid display
 *
 * @param {HTMLElement} $container - DOM Element that contains a list of generated columns
 * @param {string} rgbaColor       - RGBA color to stylize the generated columns
 *
 */
function setGridEvents($container, rgbaColor) {
    // Handle resize
    window.addEventListener(
        'resize',
        setGridHelperColumns($container, rgbaColor)
    );

    // Toggle grid
    let ctrlDown = false;
    let isActive = false;

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Control') {
            ctrlDown = true;
        } else {
            if (ctrlDown && e.key == 'g') {
                if (isActive) {
                    $container.style.visibility = 'hidden';
                } else {
                    $container.style.visibility = 'visible';
                }

                isActive = !isActive;
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key == 'Control') {
            ctrlDown = false;
        }
    });
}

export { gridHelper };
