import Nogizaka46Service from './Nogizaka46Service';
import assert from 'assert';
import Nogizaka46 from './Nogizaka46';

describe('Nogizaka46Service', () => {
  describe('constructor', () => {
    it('インスタンス生成', () => {
      const nogizaka46Service = new Nogizaka46Service();
      assert.ok(nogizaka46Service instanceof Nogizaka46Service);
    });
  });

  describe('listMembers', () => {
    it('一覧取得', () => {
      const members = Nogizaka46Service.listMembers();
      members.forEach((member) => {
        assert.ok(member instanceof Nogizaka46);
      })
    });
  });
});
