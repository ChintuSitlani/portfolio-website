import HeadingWithSpinningSVG from "../Heading/HeadingWithSpinningSVG";
import { motion } from "framer-motion";
import { containerVariants, fadeSlideUp } from "../../utils/animation";
import { useInViewFade } from "../../utils/useInViewFade";

export default function MyStack() {
    const stacks = [
        {
            title: "FRONTEND",
            items: [
                { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
                { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
                { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "Next.js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" },
                { name: "Angular", img: "https://www.svgrepo.com/show/353396/angular-icon.svg" },
                { name: "Recoil", img: "https://cdn.worldvectorlogo.com/logos/recoil-js.svg" },
                { name: "Framer Motion", img: "https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png" },
                { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
                { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            ],
        },
        {
            title: "BACKEND",
            items: [
                { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                { name: "Express", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
            ],
        },
        {
            title: "DATABASE",
            items: [
                { name: "Prisma", img: "https://www.svgrepo.com/show/373776/light-prisma.svg" },
                { name: "SQL", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
                { name: "PostgreSQL", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
                { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg" },
            ],
        },
        {
            title: "TOOLS",
            items: [
                { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
                { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
                { name: "Chat GPT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/960px-ChatGPT_logo.svg.png" },
                { name: "Cluade AI", img: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude-color.png" },
            ],
        },
    ];

    return (
        <section className="m-4 md:m-8">
            {/* Heading */}
            <div >
                <HeadingWithSpinningSVG headingName="MY STACK"/>
            </div>

            {stacks.map((stack, stackIndex) => {
                const { ref, inView } = useInViewFade(0.3);

                return (
                    <motion.div
                        key={stackIndex}
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="grid md:grid-cols-14 gap-4 mt-16"
                    >
                        {/* Title */}
                        <motion.div variants={fadeSlideUp} className="md:col-span-5">
                            <h2 className="font-['Anton'] text-gray-300 text-5xl">
                                {stack.title}
                            </h2>
                        </motion.div>

                        {/* Items */}
                        <motion.div
                            className="md:col-span-8 text-lg flex flex-wrap gap-x-6 md:gap-x-11 gap-y-9"
                            variants={containerVariants} // parent controls stagger
                        >
                            {stack.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeSlideUp} // each child fades/slides up
                                    className="flex items-center"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        loading="lazy"
                                        className="mr-2 w-6 h-6 md:w-10 md:h-10 object-contain"
                                    />
                                    <span className="text-2xl capitalize">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                );
            })}
        </section>
    );
}
