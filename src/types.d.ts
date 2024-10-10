interface IConverter {
    id: number;
    title?: string;
    iconFrom?: string;
    iconTo?: string | string[];
    resultText?: string;
    calculate: (value: number) => [number, { [key: string]: string } | null];
}
