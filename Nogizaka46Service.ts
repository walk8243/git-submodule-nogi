import Nogizaka46, { memberData } from './Nogizaka46';

export default class Nogizaka46Service {
  static listMembers() {
    const nogizakas: Nogizaka46[] = [];
    const members: memberData[] = require('./member.json');
    for (const member of members) {
      const nogizaka = new Nogizaka46();
      nogizaka.setMember(member);
      nogizakas.push(nogizaka);
    }
    return nogizakas;
  }
}
