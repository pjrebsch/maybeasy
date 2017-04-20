import * as test from 'tape';
import { just, nothing } from './../src/index';

test('Nothing.getOrElse', t => {
  const result = nothing().getOrElse('foo');
  t.equal('foo', result, 'getOrElse returns orElse value');
  t.end();
});

test('Nothing.map', t => {
  nothing().map(_ => t.fail("map shouldn't run"));
  t.end();
});

test('Nothing.andThen', t => {
  nothing().andThen(_ => just(t.fail('andThen should not run')));
  t.end();
});

test('Nothing.cata', t => {
  nothing().cata({
    Just: _ => t.fail('Just branch should never run'),
    Nothing: () => t.pass('Nothing branch executed as expected'),
  });
  t.end();
});