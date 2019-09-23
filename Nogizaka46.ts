const members: memberData[] = require('./member.json');

export default class Nogizaka46 {
  name?: memberName;
  call?: memberName;
  term?: number;
  captain?: boolean;

  constructor(name: string) {
    for (const member of members) {
      if (member['name'].includes(name)) {
        this.setMember(member);
      }
    }
  }

  protected setMember(member: memberData) {
    this.name = member['name'];
    this.call = member['call'];
    this.term = member['term'];
    this.captain = member['captain'] || false;
  }
}

type memberData = {
  name: memberName,
  call: memberName,
  term: number,
  captain?: boolean,
};
type memberName = [ string, string ];
