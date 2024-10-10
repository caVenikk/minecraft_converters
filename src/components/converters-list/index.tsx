import { Flex } from "antd";
import { ConverterCard } from "@/components/converter-card";

interface ConvertersListProps {
    converters: { id: number; name: string }[];
}

export function ConvertersList(props: ConvertersListProps) {
    const { converters } = props;

    return (
        <Flex vertical>
            {converters.map((converter) => (
                <ConverterCard converter={converter} key={converter.id} />
            ))}
        </Flex>
    );
}
