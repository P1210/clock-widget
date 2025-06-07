import { motion, AnimatePresence } from "framer-motion";

function AnimatedDigit({ digit, height }) {
  return (
    <div style={{ height, width: "100%", overflow: "hidden", position: "relative" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={digit}
          initial={{ y: height }}
          animate={{ y: 0 }}
          exit={{ y: -height }}
          transition={{ duration: 0.3 }}
          style={{
            height,
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

function Counter({ value, fontSize = 80 }) {
  const height = fontSize * 1.2;
  return (
    <div
      style={{
        display: "flex",
        fontSize,
        fontWeight: "bold",
        fontVariantNumeric: "tabular-nums",
        width: fontSize * 1.2,
      }}
    >
      {value.split("").map((digit, idx) => (
        <AnimatedDigit key={idx} digit={digit} height={height} />
      ))}
    </div>
  );
}

export default Counter;
