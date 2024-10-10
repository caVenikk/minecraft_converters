export const formatString = (template: string, values: { [key: string]: string }): string => {
    return template.replace(/{(\w+)}/g, (_, key) => values[key] || "");
};
