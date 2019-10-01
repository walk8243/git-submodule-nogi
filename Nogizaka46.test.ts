import Nogizaka46 from './Nogizaka46';
import assert from 'assert';

describe('Nogizaka46', () => {
  describe('constructor', () => {
    let nogizaka: Nogizaka46;
    it('"秋元"を渡す', () => {
      nogizaka = new Nogizaka46('秋元');
      assert.deepStrictEqual(nogizaka.name, [ '秋元', '真夏' ]);
      assert.deepStrictEqual(nogizaka.english, [ 'akimoto', 'manatsu' ]);
      assert.strictEqual(nogizaka.term, 1);
      assert.strictEqual(nogizaka.captain, true);
    });
    it('"真夏"を渡す', () => {
      nogizaka = new Nogizaka46('真夏');
      assert.deepStrictEqual(nogizaka.name, [ '秋元', '真夏' ]);
      assert.deepStrictEqual(nogizaka.english, [ 'akimoto', 'manatsu' ]);
      assert.strictEqual(nogizaka.term, 1);
      assert.strictEqual(nogizaka.captain, true);
    });
    it('"山下"を渡す', () => {
      nogizaka = new Nogizaka46('山下');
      assert.deepStrictEqual(nogizaka.name, [ '山下', '美月' ]);
      assert.deepStrictEqual(nogizaka.english, [ 'yamashita', 'mizuki' ]);
      assert.strictEqual(nogizaka.term, 3);
      assert.strictEqual(nogizaka.captain, false);
    });
    it('指定しない', () => {
      nogizaka = new Nogizaka46();
      assert.strictEqual(nogizaka.name, undefined);
      assert.strictEqual(nogizaka.english, undefined);
      assert.strictEqual(nogizaka.term, undefined);
      assert.strictEqual(nogizaka.captain, undefined);
    });
  });
});
