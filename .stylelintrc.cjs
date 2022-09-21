module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recommended-scss',
        'stylelint-config-standard-vue'
    ],
    plugins: ['stylelint-order'],
    // 不同格式的文件指定自定义语法
    overrides: [
        {
            files: ['**/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss'
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html'
        }
    ],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.json',
        '**/*.md',
        '**/*.yaml'
    ],
    rules: {
        "selector-class-pattern": null,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep']
            }
        ],
        'color-hex-case': 'lower',
        'comment-empty-line-before': 'never',
        // 使用数字或命名的 (可能的情况下) font-weight 值
        'font-weight-notation': null,
        'function-comma-newline-after': null,
        'function-parentheses-newline-inside': null,
        // 禁止低优先级的选择器出现在高优先级的选择器之后
        'no-descending-specificity': null,
        // 禁止空源
        'no-empty-source': null,
        // 禁止缺少文件末尾的换行符
        'no-missing-end-of-source-newline': null,
        // 行内样式的尾随分号
        'declaration-block-trailing-semicolon': null,
        // 指定样式的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition'
        ]
    }
}
