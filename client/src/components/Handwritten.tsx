import { motion } from "framer-motion"
interface HandwrittenTextProps {
    lines: string[];
    delay?: number;
    className?: string;
}

export const HandwrittenText: React.FC<HandwrittenTextProps> = ({
    lines,
    delay = 0,
    className = '',
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay,
                duration: 0.4,
            }}
            className={`
        absolute
        z-20
        hidden
        font-['Comic_Sans_MS','Segoe_Print',cursive]
        text-[#1D4ED8]
        sm:block
        ${className}
      `}
        >
            {lines.map((line, index) => (
                <motion.div
                    key={line}
                    initial={{
                        opacity: 0,
                        width: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        width: '100%',
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: delay + index * 0.45,
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                    className="
            overflow-hidden
            whitespace-nowrap
            text-lg
            font-medium
            leading-7
            sm:text-xl
            lg:text-2xl
          "
                >
                    {line}
                </motion.div>
            ))}

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{
                    delay: delay + lines.length * 0.45,
                    duration: 0.6,
                }}
                className="
          mt-1
          h-[2px]
          rotate-[-4deg]
          rounded-full
          bg-[#F6C945]
        "
            />
        </motion.div>
    );
};