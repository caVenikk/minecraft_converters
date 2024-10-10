import { InputNumber, Avatar, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { formatString } from "@/utils";

interface ConverterCardProps {
    title?: string;
    iconFrom?: string;
    iconTo?: string | string[];
    resultText?: string;
    calculate: (value: number) => [number, { [key: string]: string } | null];
}

export function ConverterCard(props: ConverterCardProps) {
    const { iconFrom, iconTo, calculate, resultText, title } = props;

    const [value, setValue] = useState<number | null>(0);
    const [result, setResult] = useState<number | null>(null);
    const [resultFormatOptions, setResultFormatOptions] = useState<{ [key: string]: string } | null>(null);

    useEffect(() => {
        if (value === null) {
            setResult(null);
            setResultFormatOptions(null);
            return;
        }

        const [result, options] = calculate(value);
        setResult(result);
        setResultFormatOptions(options);
    }, [value, calculate]);

    let appendAfter = null;
    if (iconFrom && iconTo) {
        appendAfter = (
            <div>
                <Avatar shape="square" src={iconFrom} />
                <ArrowRightOutlined />
                {Array.isArray(iconTo) ? (
                    iconTo.map((icon) => <Avatar shape="square" src={icon} key={icon} />)
                ) : (
                    <Avatar shape="square" src={iconTo} />
                )}
            </div>
        );
    }

    const defaultResultText = !result ? "Введи значение" : `${result}`;

    return (
        <Card>
            {title && <h3>{title}</h3>}
            <InputNumber size="large" addonAfter={appendAfter} defaultValue={0} value={value} onChange={setValue} />
            <div>
                {resultText && resultFormatOptions ? formatString(resultText, resultFormatOptions) : defaultResultText}
            </div>
        </Card>
    );
}
