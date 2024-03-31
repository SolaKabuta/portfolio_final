import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    return (
        <div className="">
            <div className="flex h-48 items-center justify-center">
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-gray-900"
        >
            <div
                style={{
                    scale: "2",
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
            </div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;

type CardType = {
    url: string;
    title: string;
    id: number;
};


const cards: CardType[] = [
    {
        url: "../src/assets/projects/screenshots/Coppens_Hero.jpg",
        title: "Coming soon",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "Coming soon",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "Coming soon",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Coming soon",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Coming soon",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Coming soon",
        id: 6,
    },
];