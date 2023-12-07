export function getTranslate(el: Element) {
    const translate = {x: 0, y: 0};

    if (!window.getComputedStyle) return translate;

    const style = getComputedStyle(el);
    const transform = style.transform  

    let matches = transform.match(/translate\(([^)]+)\)/);

    if (matches) {
        const parts = matches[1].split(', ');
        translate.x = parseFloat(parts[0]);
        translate.y = parseFloat(parts[1]);
    }

    return translate;
}