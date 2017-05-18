const DATA_API_KEY = '.data-api';

const $document    = $(document);
const $window      = $(window);
const $html        = $(document.documentElement).removeClass('has-no-js').addClass('has-js');
const $body        = $(document.body);

const isDebug      = !!$html.data('debug');

export { DATA_API_KEY, $document, $window, $html, $body, isDebug };
