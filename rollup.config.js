import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "bin/create-3np-stack",
    output: {
      file: "dist/create-3np-stack",
      format: "es",
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
          },
          output: { quote_style: 1 },
        }),
      ],
    },
  },
];
