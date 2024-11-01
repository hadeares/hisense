import AccordionItem from './AccordionItem';

const Accordion = () => {
    const accordionData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV MiniLED U8N' },
                { item: 'Sistema Operacional', description: 'Google TV' },
                { item: 'Idioma do Display', description: 'Inglês | Espanhol | Francês' },
                { item: 'Wi-Fi', description: 'Sim' },
                { item: 'Bluetooth', description: 'Sim' },
                { item: 'UPC/Garantia', description: '888143016474' },
            ]
        },
        {
            title: 'Vídeo',
            content: [
                { item: 'Tamanho da Tela', description: '75"' },
                { item: 'Tipo de Tela', description: 'MiniLED | QLED TV' },
                { item: 'Resolução', description: '3840x2160' },
                { item: 'Taxa de Movimento', description: '60' },
                { item: 'Tempo de Resposta', description: '6,5 ms' },
            ]
        },
        {
            title: 'Áudio',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV MiniLED U8N' },
                { item: 'Sistema Operacional', description: 'Google TV' }
            ]
        },
        {
            title: 'Recursos Smart',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV MiniLED U8N' },
                { item: 'Sistema Operacional', description: 'Google TV' }
            ]
        },
        {
            title: 'Dimensões e Peso',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV MiniLED U8N' },
                { item: 'Sistema Operacional', description: 'Google TV' }
            ]
        }
    ];

    return (
        <div className="max-w-[1250px] px-3 mx-auto mt-10">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Accordion;
