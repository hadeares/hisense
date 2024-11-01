'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
    {
        slug: '1',
        image: '/Noticias/fifa-25.webp',
        title: 'Hisense nomeada primeira Parceira Oficial da Copa do Mundo de Clubes da FIFA 2025™',
        description: 'A Hisense, marca líder global em eletrônicos de consumo e eletrodomésticos, anunciou que firmou uma parceria oficial para a nova Copa™ do Mundo de Clubes da FIFA. O anúncio foi feito hoje em um evento especial na Shanghai Tower com a presença do presidente da FIFA, Gianni Infantino, do secretário-geral da FIFA, Mattias Grafström, e do presidente do Grupo Hisense, Jia Shaoqian.',
    },
    {
        slug: '2',
        image: '/Noticias/black-myth.webp',
        title: 'Hisense faz parceria com Black Myth: WUKONG para elevar a experiência de jogo',
        description: 'A Hisense, líder global em eletrônicos de consumo e eletrodomésticos, anunciou sua parceria global de jogos com o aguardado RPG de ação (RPG), Black Myth: Wukong. Com o lançamento mundial do jogo, um modo de imagem exclusivo Black Myth: Wukong é introduzido em TVs Hisense selecionadas para elevar a experiência de jogo.',
    },
    {
        slug: '3',
        image: '/Noticias/melhor-tv.webp',
        title: 'Hisense U8N eleita a Melhor TV QLED de 2024 pelo Tom’s Guide Awards',
        description: 'Segundo a máteria no Tom’s Guide, a Hisense está sendo cada vez mais conhecida pelo mais recente modelo U8N. De acordo com os dados e testes realizados na semana passada pela Tom’s Guide, a Mini-LED TV U8N da Hisense é tão boa quanto os modelos top de linha, além de ser um pouco mais barata.',
    },
    {
        slug: '4',
        image: '/Noticias/eisa-awards.jpg',
        title: 'Hisense recebe o prêmio EISA Awards 2024-2025 de inovação e excelência',
        description: 'A Hisense, líder global em eletrodomésticos e produtos eletrônicos, orgulhosamente anuncia a conquista de uma série de prêmios de prestígio da Expert Imaging and Sound Association (EISA) de 2024-2025. Esses prêmios ressaltam o compromisso inabalável da Hisense com a inovação e a excelência tecnológica, no fornecimento de experiências visuais e de áudio excepcionais aos consumidores em todo o mundo.',
    },
    {
        slug: '5',
        image: '/Noticias/grupo-globo.webp',
        title: 'Grupo Globo promove encontro para apresentar o protótipo da TV 3.0 com produtos Hisense',
        description: 'O Grupo Globo promoveu, nesta terça-feira (6), um encontro para apresentar o protótipo da TV 3.0. O que as TVs da sala oferecem é um olhar para o futuro da televisão. Um futuro em que imagem e som, como você nunca viu, chegarão na casa de todos junto a recursos que, hoje, só estão nos celulares mais avançados.',
    },
    {
        slug: '6',
        image: '/Noticias/neuer.webp',
        title: 'A lenda do goleiro Manuel Neuer assina como embaixador da marca Hisense UEFA EURO 2024™ para sua campanha ‘BEYOND GLORY’',
        description: 'O jogador da seleção alemã, vencedor da Copa do Mundo da FIFA, além de seus 11 títulos da Bundesliga, junta-se à Hisense como embaixador oficial da campanha. A campanha ‘BEYOND GLORY’, que significa ‘Além da Glória’ em português, celebra a busca incessante pela excelência compartilhada por jogadores de futebol profissionais que almejam as honras do EURO e o compromisso da Hisense em ultrapassar os limites do setor de eletrodomésticos.',
    },
]

export default function Noticias() {
    const [featuredPost, ...otherPosts] = posts;

    return (
        <main className="max-w-[1920px] mx-auto">
            {/* Bloco de Destaque */}
            <section className="pt-10 px-3 max-w-[1250px] mx-auto">
                <Link href={`/noticias/${featuredPost.slug}`}>
                    <div className="max-full bg-gray-100 rounded-[2rem] overflow-hidden">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            width={1588}
                            height={477}
                            className="object-cover h-auto w-auto"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-hisense text-4xl">{featuredPost.title}</h3>
                            <p className="text-sm py-4 line-clamp-3">{featuredPost.description}</p>
                            <button type="button" className="bg-hisense text-white px-6 py-2 rounded-full hover:shadow-xl">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Lista de Notícias */}
            <section className="relative max-w-[1250px] mx-auto px-3 py-20">
                <h4 className="text-gray-600 text-4xl font-bold pb-7">Veja mais notícias:</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {otherPosts.map((post) => (
                        <Link key={post.slug} href={`/noticias/${post.slug}`}>
                            <div className="bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl min-h-[530px] flex flex-col justify-between">
                                <div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={1588}
                                        height={477}
                                        className="object-cover h-full w-full"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-bold text-hisense pt-3">{post.title}</h3>
                                        <p className="text-sm py-4 line-clamp-3">{post.description}</p>
                                    </div>
                                </div>
                                <div className='ps-5 pb-5'>
                                    <button className="mt-5 bg-hisense text-white text-sm px-6 py-2 pt-3 rounded-full hover:shadow-xl">
                                        Ler notícia
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
