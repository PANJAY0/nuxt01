// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'
export default withNuxt(
  stylistic.configs.customize({
    // flat: true,
    indent: 2, // {} > Enter後縮進 2 空格
    quotes: 'single', //  字串使用單引號''
    semi: false, // 禁止語句末尾的分號;
    jsx: true, // 檢查jsx語法，const element = <div>Hello</div>
    braceStyle: '1tbs', // {}的開頭{ 會在語句的同一行
    commaDangle: 'always-multiline', // 物件 或 陣列內容的末尾都加逗號,
  }),
)
