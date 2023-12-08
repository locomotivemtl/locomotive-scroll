export function getTranslate(el: HTMLElement) {
    const translate = {x: 0, y: 0};
 
    const transform = el.style.transform  

    let matches = transform.match(/translate3d\(([^)]+)\)/);

    if (matches) {
        const parts = matches[1].split(', ');
        translate.x = parseFloat(parts[0]);
        translate.y = parseFloat(parts[1]);
    }

    return translate;
}
