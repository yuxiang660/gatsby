const ProgressBar = require(`progress`)

// TODO remove in V3
export function createProgress(message, reporter) {
  if (reporter && reporter.createProgress) {
    return reporter.createProgress(message)
  }

  const bar = new ProgressBar(
    ` [:bar] :current/:total :elapsed s :percent ${message}`,
    {
      total: 0,
      width: 30,
      clear: true,
    }
  )

  return {
    start() {},
    tick(increment = 1) {
      bar.tick(increment)
    },
    done() {},
    updateTotal(value) {
      bar.updateTotal(value)
    },
  }
}
