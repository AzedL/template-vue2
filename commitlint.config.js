/**
 * types
 * feat     新增特性功能
 * modify   业务逻辑等修改
 * fix      修复 bug
 * perf     优化性能体验等
 * refactor 代码重构
 * style    代码格式、样式修改
 * build    构建编译的修改，如版本迭代，项目构建和依赖改动等
 * chore    改变构建流程，增加依赖库工具包等其他修改
 * revert   回滚
 * ci       持续集成
 * docs     文档修改
 * test     测试用例修改
 */
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'modify', 'fix', 'perf', 'refactor', 'style', 'build', 'chore', 'revert', 'ci', 'docs', 'test']
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100]
  }
}
