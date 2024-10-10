interface ConverterCardProps {
    converter: { id: number; name: string };
}

export function ConverterCard(props: ConverterCardProps) {
    const { converter } = props;

    return (
        <div>
            <h1>ConverterCard component</h1>
            {converter.name}
        </div>
    );
}
