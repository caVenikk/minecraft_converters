import { Space } from "antd";
import { ConverterCard } from "@/components/converter-card";

interface ConvertersListProps {
    converters: IConverter[];
}

export function ConvertersList(props: ConvertersListProps) {
    const { converters } = props;

    return (
        <Space direction="vertical">
            {converters.map((converter) => (
                <ConverterCard key={converter.id} {...converter} />
            ))}
        </Space>
    );
}
