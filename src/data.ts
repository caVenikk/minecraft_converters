import { logs, wooden_planks, stairs, fence, trapdoors, stick, slab } from "@/blocks";

export const converters: IConverter[] = [
    {
        id: 1,
        title: "Количество предметов в количество стаков и предметов",
        resultText: "{stacks} стаков и {items} предметов",
        calculate: (value: number) => {
            if (value === 0) {
                return [0, null];
            }
            const stacks = Math.floor(value / 64);
            const items = value % 64;
            return [stacks, { stacks: stacks.toString(), items: items.toString() }];
        },
    },
    {
        id: 2,
        iconFrom: wooden_planks,
        iconTo: logs,
        title: "Количество досок в количество бревен",
        calculate: (value: number) => {
            const logs = Math.ceil(value / 4);
            return [logs, null];
        },
    },
    {
        id: 3,
        iconFrom: stairs,
        iconTo: wooden_planks,
        title: "Количество лестниц в количество досок",
        calculate: (value: number) => {
            let number = (value * 6) / 4;
            if (number % 6 !== 0) {
                number += 6 - (number % 6);
            }
            return [number, null];
        },
    },
    {
        id: 4,
        iconFrom: fence,
        iconTo: [wooden_planks, stick],
        title: "Количество заборов в количество досок и палок",
        resultText: "{planks} досок и {sticks} палок",
        calculate: (value: number) => {
            let planks = (value * 4) / 3;
            if (planks % 4 !== 0) {
                planks += 4 - (planks % 4);
            }
            let sticks = (value * 2) / 3;
            if (sticks % 2 !== 0) {
                sticks += 2 - (sticks % 2);
            }
            return [planks, { planks: planks.toString(), sticks: sticks.toString() }];
        },
    },
    {
        id: 5,
        iconFrom: trapdoors,
        iconTo: wooden_planks,
        title: "Количество люков в количество досок",
        calculate: (value: number) => {
            let number = (value * 6) / 2;
            if (number % 6 !== 0) {
                number += 6 - (number % 6);
            }
            return [number, null];
        },
    },
    {
        id: 6,
        iconFrom: slab,
        iconTo: [wooden_planks],
        title: "Количество полублоков в количество досок",
        calculate: (value: number) => {
            let number = (value * 3) / 6;
            if (number % 3 !== 0) {
                number += 3 - (number % 3);
            }
            return [number, null];
        },
    },
];
