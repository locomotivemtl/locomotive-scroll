const toDash = (str: string) =>
    str
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();

export { toDash };
