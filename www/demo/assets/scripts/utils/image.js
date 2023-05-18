const LAZY_LOADED_IMAGES = []

export function loadImage(url, options = {}) {
    return new Promise((resolve, reject) => {
        const $img = new Image();

        if (options.crossOrigin) {
            $img.crossOrigin = options.crossOrigin;
        }

        const loadCallback = () => {
            resolve({
                element: $img,
                ...getImageMetadata($img),
            });
        }

        if($img.decode) {
            $img.src = url
            $img.decode().then(loadCallback).catch(e => {
                reject(e)
            })
        } else {
            $img.onload = loadCallback
            $img.onerror = (e) => {
                reject(e);
            };
            $img.src = url
        }
    });
}

export function getImageMetadata($img) {
    return {
        url: $img.src,
        width: $img.naturalWidth,
        height: $img.naturalHeight,
        ratio: $img.naturalWidth / $img.naturalHeight,
    };
}

/**
 * Lazy load the given image.
 *
 * @param {HTMLImageElement} $el      - The image element.
 * @param {?string}          url      - The URI to lazy load into $el.
 *     If falsey, the value of the `data-src` attribute on $el will be used as the URI.
 * @param {?function}        callback - A function to call when the image is loaded.
 */
export async function lazyLoadImage($el, url, callback) {
    let src = url ? url : $el.dataset.src

    let loadedImage = LAZY_LOADED_IMAGES.find(image => image.url === src)

    if (!loadedImage) {
        loadedImage = await loadImage(src)

        if (!loadedImage.url) {
            return;
        }

        LAZY_LOADED_IMAGES.push(loadedImage)
    }

    if($el.src === src) {
        return
    }

    if ($el.tagName === 'IMG') {
        $el.src = loadedImage.url;
    } else {
        $el.style.backgroundImage = `url(${loadedImage.url})`;
    }

    requestAnimationFrame(() => {
        let lazyParent = $el.closest('.c-lazy');

        if(lazyParent) {
            lazyParent.classList.add('-lazy-loaded')
            lazyParent.style.backgroundImage = ''
        }

        $el.classList.add('-lazy-loaded')

        callback?.()
    })
}
