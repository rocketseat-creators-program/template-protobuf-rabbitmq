import amqp from 'amqplib'

const once = (fnToCall) => {
  let called = false
  let result
  return (...args) => {
    if (!called) {
      called = true
      result = fnToCall(...args)
    }
    return result
  }
}

class RabbitMQClient { }

export { RabbitMQClient }
