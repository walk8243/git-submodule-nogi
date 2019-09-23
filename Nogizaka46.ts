const members: memberData[] = require('./member.json');

export default class Nogizaka46 {
  name?: memberName;
  english?: memberName;
  term?: number;
  captain?: boolean;

  constructor(name?: string) {
    if (!name) { return; }
    for (const member of members) {
      if (member['name'].includes(name)) {
        this.setMember(member);
      }
    }
  }

  protected setMember(member: memberData) {
    this.name = member['name'];
    this.english = member['english'];
    this.term = member['term'];
    this.captain = member['captain'] || false;
  }
}
