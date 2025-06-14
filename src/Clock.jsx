import { motion, AnimatePresence } from "framer-motion";

function AnimatedDigit({ digit, height }) {
  return (
    <div
      style={{
        height,
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={digit}
          initial={{ y: "100%", scale: 0 }} // during mount
          animate={{ y: "0%", scale: 1 }}
          exit={{ y: -"-100%", scale: 0 }} // during component unmount
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
          }}
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Counter({ value, fontSize, textColor }) {
  const height = `calc(${fontSize} * 1.2)`;
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25rem",
        fontSize,
        fontWeight: "bold",
        fontVariantNumeric: "tabular-nums",
        width: `calc(${fontSize} * 1.35)`,
        color: textColor,
      }}
    >
      {value.split("").map((digit, idx) => (
        <AnimatedDigit key={idx} digit={digit} height={height} />
      ))}
    </div>
  );
}

export default Counter;
