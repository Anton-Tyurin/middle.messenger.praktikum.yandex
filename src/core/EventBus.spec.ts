import { assert } from 'chai';
import EventBus from './EventBus';

describe('EventBus', () => {
  const eventBus = new EventBus();
  const { listeners } = eventBus;
  const callback = () => 42;

  it('Must be defined', () => {
    assert.exists(eventBus);
  });

  it('Events can be added', () => {
    const events = ['one', 'two', 'three'];

    events.forEach((event) => eventBus.on(event, callback));

    assert.hasAllKeys(listeners, ['one', 'two', 'three']);
    assert.include(listeners.two, callback);
  });

  it('Event can be removed', () => {
    eventBus.off('two', callback);

    assert.notInclude(listeners.two, callback);
  });

  it('Event can be removed', () => {
    eventBus.off('two', callback);

    assert.notInclude(listeners.two, callback);
  });
});
